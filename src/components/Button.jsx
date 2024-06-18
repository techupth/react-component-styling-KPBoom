/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';



function Button(props) {
    let color;
    if (props.text ==="Primary"){
        color = "#074EE8";
    } else if (props.text==="Secondary"){
        color = "#07A4E8";
    }
    return (
        <button
           css={css`
            width : 171.19px;
            height : 50px;
            border-radius : 4px;
            padding : 0px 16px 0px 16px;
            background-color : ${color};
            `}
        >
            Button
        </button>
    );
}

export default Button;