from PIL import Image
import pytesseract

# Load the image
image_path = 'rizzlabs/test_ss.jpeg'
image = Image.open(image_path)

# Perform OCR on the image
text = pytesseract.image_to_string(image)

# Replace '|' with 'I'
text = text.replace('|', 'I')

# Store the results in an array
text_array = text.split('\n')

# Print the array
for line in text_array:
    print(line)
