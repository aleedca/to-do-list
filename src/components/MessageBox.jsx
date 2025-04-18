import React from "react";
import "../styles/App.css";

function MessageBox({ onClose }) {
  return (
    <div className="message-box">
      <p>
        para utilizar esta app tiene que escribir en la caja de texto la tarea a realizar, puede 
        oprimir ENTER o darle click al botón ADD para agregarla a la lista. <br /><br />
        
        de igual forma, puede eliminarla o darle click al checkbox para tacharla como realizada.
        Tiene la oportunidad de cambiar el tema (en el icono del sol a la derecha) por si sus ojos no 
        aguantan tanta claridad.<br /><br />
        
        tome en cuenta que sus tareas no se guardarán una vez cierra esta ventana de su navegador.<br /><br />
        
        espero que este to-do list minimalista le ayude a dejar de procrastinar y reflejarle que usted es capaz de
        lograr muchas cosas si se lo propone. gracias por utilizarlo y leer esto!!<br /><br />
        
        <a href="https://github.com/aleedca" target="_blank" rel="noopener noreferrer">- alexia🌟</a>
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default MessageBox;