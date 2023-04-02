import React, { useState, useEffect } from 'react';
import { fetchRecentSubmissions } from "./codeforces";


function App() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchRecentSubmissions(100);
      setSubmissions(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Recent submissions in last 10 contests</h1>
      <table>
        <thead>
          <tr>
            <th>Submission ID</th>
            <th>Contest ID</th>
            <th>Problem</th>
            <th>Verdict</th>
            <th>Programming Language</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td>{submission.id}</td>
              <td>{submission.contestId}</td>
              <td>
                <a
                  href={`https://codeforces.com/problemset/problem/${submission.problem.contestId}/${submission.problem.index}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {submission.problem.name}
                </a>
              </td>
              <td>{submission.verdict}</td>
              <td>{submission.programmingLanguage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
