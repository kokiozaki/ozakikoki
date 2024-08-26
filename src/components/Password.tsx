import React, { useState, ChangeEvent, FormEvent } from 'react';

interface PasswordProtectedContentProps {
  article: {
    body: string;
    password?: string;
  };
}

const PasswordProtectedContent: React.FC<PasswordProtectedContentProps> = ({ article }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === article.password) {
      setIsAuthenticated(true);
    } else {
      setError('パスワードが違います。');
    }
  };

  return isAuthenticated ? (
    <div dangerouslySetInnerHTML={{ __html: article.body }} />
  ) : (
    <form onSubmit={handlePasswordSubmit}>
      <label>
        パスワード:
        <input
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">表示</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default PasswordProtectedContent;
