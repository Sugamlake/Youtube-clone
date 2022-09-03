import { Avatar } from "@material-ui/core";
import React from "react";
import "./SubscriptionRow.css";

export const SubscriptionRow = ({ title, channelImage }) => {
  return (
    /**Línea 9 se agrega la clase selected cuando se seleccione o se de click sobre las opciones del menú izquierdo
     * También se evalua si la propiedad expand es true o false para conservar los estilos originales o encimar el icono sobre el titulo.
     */
    <div className="subscriptionRow"> 
    {/**En la línea 11 si la prop. expand es falsa se modifica el margen del ícono o caso contrario se conserva su estilo normal */}
      <Avatar className="subscriptionRow__icon" src={channelImage}/>
    {/**En la línea 13 si la prop. expand es falsa, se quita el margen izquierdo y cambia el tamaño de la letra a 10 px, de forma que quede un titulo mas pequeño y centrado al ícono */}
      <h2 className="subscriptionRow__title">{title}</h2>
    </div>
  );
};
