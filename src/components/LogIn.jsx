import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // გამოიყენე იგივე სტილი რაც Register-ს

export default function Login() {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      u => u.username === form.username && u.password === form.password
    );

    if (user) {
      alert('ავტორიზაცია წარმატებით შესრულდა!');
      navigate('/center'); 
    } else {
      alert('მომხმარებელი ან პაროლი არასწორია!');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>ავტორიზაცია</h2>
      <div>
        <label htmlFor="username">მომხმარებლის სახელი</label>
        <input
          type="text"
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">პაროლი</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">შესვლა</button>
    </form>
  );
}