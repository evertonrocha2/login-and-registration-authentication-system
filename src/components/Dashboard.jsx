import { BsCheck2Circle } from "react-icons/bs";



export default function Dashboard() {
    return (<div className="h-[100vh] px-9 md:px-0 bg-[#0E101B] flex flex-col items-center">
        <h1 className="text-white pt-8 text-md  md:text-2xl text-center tracking-tighter">Bem vindo a Dashboard, se chegou aqui significa<br /> <strong className="font-morganite text-[#A9FFB7] text-8xl md:text-9xl uppercase tracking-normal">que o login foi um sucesso!!</strong></h1>
        <BsCheck2Circle size={120}  color="#A9FFB7"/>
    </div>)
}