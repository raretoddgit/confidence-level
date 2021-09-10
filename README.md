# confidence-level

The MobileNet network keeps surprising me. The library gets it wrong whenever I pose something obvious, and gets it right whenever I pose something rare. Looking at the incorrect labels is a laugh but I decided to highlight the metrics behind the labels to show just how unsure of itself the network is.  

What's most interesting to me about machine learning is the faith that people put into it. As a technology, it carries the connotation of certitude, but it's anything but. I decided to dig into the  mobile net confidence ratings for any given moment and have that number run across the screen. Even at its most certain, MobileNet's confidence levels peak around 30%. 

My console inside VSCode isn't working so I retrieved the confidence levels from my inspector's console. These values are then run through JavaScript's *Math.ceil* function to make them more manageable as they appear on screen.
