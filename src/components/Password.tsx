import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    // ローカルストレージから認証状態を読み込む
    const storedAuth = localStorage.getItem(`auth_${article.password}`);
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, [article.password]);

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === article.password) {
      setIsAuthenticated(true);
      setError('');
      // 認証状態をローカルストレージに保存
      localStorage.setItem(`auth_${article.password}`, 'true');
    } else {
      setError('パスワードが違います。');
    }
  };

  if (isAuthenticated) {
    return (
      <section className="web-column-content">
        <div className="article-body" dangerouslySetInnerHTML={{ __html: article.body }} />
      </section>
    );
  }

  return (
    <div className="password-form">
      <form onSubmit={handlePasswordSubmit}>
        <label>
          パスワード:
          <input
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">表示</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </form>
    </div>
  );
};

export default PasswordProtectedContent;