'use client'
import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [budget, setBudget] = useState<number | ''>('');
  const [employee, setEmployee] = useState<number | ''>('')
  const [error, setError] = useState("")
  const [success, setSucess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function saveToNotion() {
    try {
      const url = '/submit-to-notion';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, budget, website }),
      });

      const data = await response.json();
      if (response.ok) {
        setSucess(true)
      } else {
        console.error('Error:', data);
        setError('Sorry, failed to send message, please try again later');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Sorry, failed to send message, please try again later');
    }
  }
  const validateWebsite = (url: string): boolean => {
    // Matches optional http/https, followed by a valid domain
    const domainRegex = /^(https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$/
      ;
    return domainRegex.test(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('')
    setLoading(true)
    console.log("handle sub", employee)
    if (employee) {
      console.log('Honeypotted!');
      setLoading(false)
      return;
    }
    if (!validateWebsite(website)) {
      setError('Please enter a valid domain in the website field.');
      setLoading(false)
      return;
    }


    await saveToNotion();
    setLoading(false)
  };

  return (

    <form
      className="flex flex-col py-8 p-5 bg-themef rounded-lg w-full max-w-[500px] mx-auto gap-4"
      onSubmit={handleSubmit}
    >
      {success ?
        <div className='bg-green-300 px-3 py-2 text-green-600 rounded-lg w-full'>
          Thank you! we&apos;ll answer you shortly
        </div>
        :
        <>
          <h2 className="text-black text-3xl text-left font-bold mb-3 uppercase">Get in touch</h2>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Name*"
              className="text-black p-2 bg-white border rounded w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              required
              className="text-black p-2 bg-white border rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              id="website"
              name="website"
              required
              placeholder="Website*"
              className="text-black p-2 bg-white border rounded w-full"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div>
            <input
              type="number"
              id="budget"
              placeholder="Budget"
              name="budget"
              min="0"
              required
              className="text-black p-2 bg-white border rounded w-full"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
            />
          </div>

          {/* Honeypot */}
          <div className='hidden'>
            <input
              type="number"
              id="employee"
              placeholder="Number of employees"
              value={employee}
              onChange={(e) => setEmployee(Number(e.target.value))}
              name="employee"
              min="0"
              className="text-black p-2 bg-white border rounded w-full"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="mt-3">
            <button
              type="submit"
              className={`w-full bg-themep hover:bg-themep/80 text-themef font-bold border px-3 rounded-lg py-2 text-xl ${loading && 'bg-gray-400 text-white animate-pulse'}`}
            >
              {loading ? 'loading' : 'Submit'}
            </button>
          </div>
          {error &&
            <div className='bg-red-300 px-3 py-2 text-red-600 rounded-lg w-full'>
              <p>{error}</p>
            </div>
          }
        </>
      }
    </form>
  );
}

export default Form;
