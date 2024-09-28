import pytesseract
from PIL import Image

def extract_text_from_image(image_path):
    try:
        # Open the image file
        img = Image.open(image_path)
        # Use pytesseract to do OCR on the image
        text = pytesseract.image_to_string(img)
        return text
    except Exception as e:
        print(f"Error extracting text: {e}")
        return ""

def organize_text(text):
    lines = text.split('\n')
    messages = []
    sender = None

    for line in lines:
        if line.strip() == '':
            continue
        if ':' in line:
            sender, message = line.split(':', 1)
            messages.append({'sender': sender.strip(), 'message': message.strip()})
        else:
            if sender:
                messages.append({'sender': sender.strip(), 'message': line.strip()})

    return messages

def determine_sender(image_path):
    try:
        img = Image.open(image_path)
        width, height = img.size

        def is_right_aligned(x, y):
            return x > width // 2

        text = extract_text_from_image(image_path)
        lines = text.split('\n')
        messages = []
        sender = None

        for line in lines:
            if line.strip() == '':
                continue
            if ':' in line:
                sender, message = line.split(':', 1)
                # Example coordinates, adjust as needed
                x, y = img.size[0] // 2, img.size[1] // 2
                if is_right_aligned(x, y):
                    sender = 'Sender 1'
                else:
                    sender = 'Sender 2'
                messages.append({'sender': sender, 'message': message.strip()})
            else:
                if sender:
                    messages.append({'sender': sender, 'message': line.strip()})

        return messages
    except Exception as e:
        print(f"Error determining sender: {e}")
        return []

# Example usage
image_path = 'rizzlabs/test_ss.jpeg'
organized_messages = determine_sender(image_path)

for msg in organized_messages:
    print(f"Sender: {msg['sender']}\nMessage: {msg['message']}\n")
