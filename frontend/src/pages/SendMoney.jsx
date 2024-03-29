<<<<<<< HEAD
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

=======
>>>>>>> 236d4bb640d15d1d2b4170d1a9cc46ecc2f74129
export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-3xl font-bold text-center">Send Money</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
<<<<<<< HEAD
                <span className="text-2xl text-white">
                  {name[0].toUpperCase()}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{name}</h3>
=======
                <span className="text-2xl text-white">A</span>
              </div>
              <h3 className="text-2xl font-semibold">Friend's Name</h3>
>>>>>>> 236d4bb640d15d1d2b4170d1a9cc46ecc2f74129
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="amount"
                >
                  Amount (in Rs.)
                </label>
                <input
<<<<<<< HEAD
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  type="number"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
=======
                  type="number"
                  className="flex h-10 rounded-md border-input bg-background px-3 py-2 text-sm"
>>>>>>> 236d4bb640d15d1d2b4170d1a9cc46ecc2f74129
                  id="amount"
                  placeholder="Enter amount"
                />
              </div>
<<<<<<< HEAD
              <button
                onClick={() => {
                  axios
                    .post(
                      'http://localhost:3000/api/v1/account/transfer',
                      { to: id, amount },
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            'token'
                          )}`,
                        },
                      }
                    )
                    .then((res) => {
                      if (res.status === 200) {
                        alert(res.data.message)
                        navigate('/dashboard');
                      }
                    })
                    .catch((err) => {
                      alert(err.response.data.message);
                    });
                }}
                className="font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white "
              >
=======
              <button className="font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white ">
>>>>>>> 236d4bb640d15d1d2b4170d1a9cc46ecc2f74129
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
