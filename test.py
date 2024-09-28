import pygame
import sys

# Initialize Pygame
pygame.init()

# Define window dimensions
window_width, window_height = 800, 600

# Create a game window
screen = pygame.display.set_mode((window_width, window_height))
pygame.display.set_caption("Basic Pygame Window")

# Define colors
WHITE = (255, 255, 255)
BLUE = (0, 0, 255)

# Set up a rectangle
rect_x, rect_y = 50, 50
rect_width, rect_height = 100, 100
rect_speed_x, rect_speed_y = 5, 5

# Frame rate (FPS)
clock = pygame.time.Clock()

# Game loop
running = True
while running:
    # Event handling
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Update rectangle position
    rect_x += rect_speed_x
    rect_y += rect_speed_y

    # Check for collision with window boundaries
    if rect_x <= 0 or rect_x + rect_width >= window_width:
        rect_speed_x = -rect_speed_x
    if rect_y <= 0 or rect_y + rect_height >= window_height:
        rect_speed_y = -rect_speed_y

    # Fill screen with white color
    screen.fill(WHITE)

    # Draw the rectangle
    pygame.draw.rect(screen, BLUE, (rect_x, rect_y, rect_width, rect_height))

    # Update the display
    pygame.display.flip()

    # Limit the frame rate to 60 FPS
    clock.tick(60)

# Cleanup when the game ends
pygame.quit()
sys.exit()
