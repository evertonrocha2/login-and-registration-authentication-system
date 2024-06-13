/* eslint-disable react/prop-types */
import LoginComponent from "./LoginComponent";

// eslint-disable-next-line react/prop-types
export default function BarraLogin({ usuario, setUsuario }) {

    return (
        <>
            {!usuario.id && (
                <LoginComponent usuario={usuario} setUsuario={setUsuario} />
            )
            }
        </>
    )
}