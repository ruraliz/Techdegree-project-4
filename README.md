# Techdegree-project-4
 browser-based, word guessing game: "Phrase Hunter"
## Additional CSS styles 

##### Added background image to the main page to style the game better why player is guessing. 
```css
.main-container {
  display: flex;
  background-image: url('/Users/lrurangwa/Documents/Projects /Techdegree-project-4/images/game2.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position:50% 50%;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  max-height: 900px;
  text-align: center;
}

```
##### Added Keyframe from animation of the title at the start and end of the game to add some movements to the visuals. 
```css
@keyframes mymove {
  0%   {left: 0px; top: 0px;}
  25%  {left: 200px; top: 0px;}
  50%  {left: 200px; top: 200px;}
  75%  {left: 0px; top: 200px;}
  100% {left: 0px; top: 0px;}
}
.title {
  color:#dee2f8;
  box-shadow: 0px 0px 10px currentcolor;
  border: 5px solid transparent;
  position:relative;
  animation: mymove 4s 2;
  animation-direction: alternate;

}
```
##### To make the button for starting the game more visually present, added a background image to the btn with linear-gradient 
```css
#btn__reset {
	width: 200px;
	margin: 0 auto;
  background-image: linear-gradient(rgb(240, 243, 240), rgb(136, 241, 157));
}
```

##### Background color for win and lose pages 
 - Changed the background colors for winning and losing end pages to green and red 
 - changes the color change for keyboard to green and red when player makes a guess to add contrast. 
