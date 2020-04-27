// animated button 
https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-css-animation-to-change-the-hover-state-of-a-button
//

<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 3000ms;
    animation-fill-mode: forward; 
  }
@keyframes background-color {
  100% {
    background-color: #4791d0;
  }
}

</style>

<button>Register</button>

