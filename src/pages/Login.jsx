import React,{useRef} from 'react';
import '@styles/Login.scss';
import logo from '@logos/menu_Destored.png';
const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event)=>{
		event.preventDefault();
		const formData  = new formData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);

	}
	return (
		<div className="Login">
				<img src={logo} alt="logo" className="img-portada" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email</label>
					<input type="text" name="email" placeholder="destored@example.com.ar" className="input input-email" />
					<label htmlFor="password" className="label">Contraseña</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button 
						onClick={handleSubmit}
						className="primary-button login-button" >
						Entrar
					</button>
					<a href="/" id="linkRecovery">Olvide mi contraseña</a>
					<button className="secondary-button signup-button">
					Crear Cuenta
				</button>
				</form>
				
			
		</div>
	);
}

export default Login;