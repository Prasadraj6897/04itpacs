import cv2

img=cv2.imread("img_avatar.png",1)

resize = cv2.resize(img, (300,100))

cv2.imshow("dsd",resize)

cv2.waitKey(2000)

# cv2.destroyAllWindows()
# video= cv2.VideoCapture(0)

# time.sleep(3)

# video.release()