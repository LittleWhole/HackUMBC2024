import cv2
import numpy as np
import matplotlib.pyplot as plt
from PIL import Image
import pytesseract

# Load the image
image_path = 'test_ss2.jpeg'
image = Image.open(image_path)
image_cv = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

# Convert the image to grayscale
gray = cv2.cvtColor(image_cv, cv2.COLOR_BGR2GRAY)

# Apply Gaussian blur to smooth the image
blurred = cv2.GaussianBlur(gray, (5, 5), 0)

# Use a binary threshold to create a mask
_, binary = cv2.threshold(blurred, 120, 255, cv2.THRESH_BINARY_INV)  # Adjust threshold value if necessary

# Apply edge detection
edges = cv2.Canny(blurred, 50, 150)

# Find contours in the edged image
contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)


plt.figure(figsize=(10, 5))

# Display RGB Image (PIL version)


# # Apply thresholding to get a binary image
# _, binary = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY_INV)

# # plt.imshow(binary)
# # plt.show()

# # Find contours
# contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Check the number of contours detected
print(f"Number of contours found: {len(contours)}")

# Draw contours on the original image (use -1 to draw all contours)
cv2.drawContours(image_cv, contours, -1, (0, 255, 0), 3)

# Display the image with contours
plt.figure(figsize=(10, 5))
plt.imshow(cv2.cvtColor(image_cv, cv2.COLOR_BGR2RGB))
plt.title('Image with Contours')
plt.axis('off')
plt.show()

# Initialize lists to hold text and sender information
text_array = []
senders = []
# print(contours)
# Loop through contours to detect text bubbles and perform OCR
for contour in contours:
    # print(contour)
    # Get the bounding box of the contour
    x, y, w, h = cv2.boundingRect(contour)
    # print(str(x) + " " + str(y) + " " + str(w) + " " + str(h))

    aspect_ratio = float(w) / h if h != 0 else 0
    
    # Extract the text bubble region
    bubble = image_cv[y:y+h, x:x+w]
    
    # Perform OCR on the text bubble
    text = pytesseract.image_to_string(bubble)
    
    # Replace '|' with 'I'
    text = text.replace('|', 'I')
    
    # Determine the sender based on the position of the text bubble
    if x < image_cv.shape[1] // 2:
        sender = 'Sender 1'
    else:
        sender = 'Sender 2'
    
    # Store the text and sender information
    text_array.append(text)
    senders.append(sender)

# Print the results
# print(senders)
for text, sender in zip(text_array, senders):
    print(f"{sender}: {text}")

# Optionally, display the image with detected text bubbles
for contour in contours:
    x, y, w, h = cv2.boundingRect(contour)
    cv2.rectangle(image_cv, (x, y), (x+w, y+h), (0, 255, 0), 2)

cv2.imshow('Detected Text Bubbles', image_cv)
cv2.waitKey(0)
cv2.destroyAllWindows()
