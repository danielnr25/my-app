import React from "react";

function Testimonio(props) {
  return (
   <div className="w-[1170px] h-[368px] flex items-center text-white justify-center bg-[#0a0a23] mt-2 mx-2 mb-12 shadow-[0_3px_13px_1px_rgba(0,0,0,9%)]">
      <img src={require(`../images/testimonio-${props.imagen}.png`)} alt="" className="h-full w-auto" />
      <div className="text-center p-10 font-normal leading-6">
         <p className="text-xl">
            <strong>{props.nombre}</strong> en {props.pais}
         </p>
         <p className="text-xl mt-4 pb-7">
            <strong>{props.profesion}</strong> en {props.empresa}
         </p>
         <p className=" text-base text-justify">
           {props.testimonio}
         </p>
      </div> 
   </div>
   );
}

export default Testimonio;
