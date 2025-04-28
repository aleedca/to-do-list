import React from "react";
import "../styles/App.css";

function MessageBox({ onClose }) {
  return (
    <div className="message-box">
      <p>
        el uso de esta página es muy sencilla: tiene que escribir en la caja de texto la tarea a realizar, luego 
        presione ENTER o dele click al botón ADD para agregarla a la lista. <br /><br />
        
        de igual forma, puede eliminarla o darle click al checkbox para tacharla como realizada.
        tiene la oportunidad de cambiar el tema (en el icono del sol a la derecha) por si sus ojos no 
        aguantan tanta claridad.<br /><br />
        
        tome en cuenta que sus tareas no se guardarán una vez cierra esta ventana del navegador.<br /><br />
        
        espero que este to do list minimalista le ayude a no procrastinar y tener evidencia que usted es capaz de
        lograr muchas cosas si se lo propone. gracias por utilizarlo y leer esto!!<br /><br />
        
        <a href="https://github.com/aleedca" target="_blank" rel="noopener noreferrer">- alexia🌟</a>
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default MessageBox;