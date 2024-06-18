/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


function Alert(props) {
    let color;
    let imgs ;
    if (props.type==="error"){
        color = "#F9C8C8";
        imgs = "./icon/red.jpg";
    } else if (props.type==="warning"){
        color = "#F9C8C8";
        imgs = "./icon/orange.png";
    } else if (props.type==="info"){
        color = "F9C8C8";
        imgs = "./icon/yellow.png";
    } else if (props.type==="success"){
        color = "F9C8C8";
        imgs = "./icon/green.png";
    }

    return(
      <div css={css`
        width: 650px;
        height: 76px;
        border-radius : 10px;
        background-color : ${color};
        `}
      >
         <img src = {imgs} alt="icon" />{props.text}

      </div>
    );

}

export default Alert ;

