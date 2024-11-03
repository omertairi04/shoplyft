import {useState, useEffect} from "react";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);

  return (
    <div className="login-form">
      <h2>Login to ShopLyft</h2>
      <label>E-mail</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  )
};

export default LoginForm;