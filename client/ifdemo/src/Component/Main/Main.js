import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className='main'>
      <section className='card'>
        <div className='card-body top'>
          <div className='card-content'>
            <h3>Welcome to Intelligent Finance</h3>
            <p>
              We’re here to support our existing customers in any way we can.
            </p>
            <button>Ways to get in touch</button>
          </div>
        </div>
        {/* 2 */}
        <div className='card-body sidebar1'>
          <div className='card-content'>
            <h3>Coronavirus</h3>
            <p>
              If the coronavirus (COVID-19) has had an impact on your income,
              you might be concerned about keeping up with your mortgage
              payments. <br /> <br /> Please don’t worry. We have ways to help,
              until things get back to normal.
            </p>
            <button>Help and support</button>
          </div>
        </div>
        {/* 3 */}
        <div className='card-body sidebar2'>
          <div className='card-content'>
            <h3>Online Banking</h3>
            <p>
              Log in to view your accounts or make a payment. If you don't
              already use Online Banking, it's easy to register online.
            </p>
            <button>Log in</button>
          </div>
        </div>
        {/* 4 */}
        <div className='card-body sidebar3'>
          <div className='card-content'>
            <h3>Overdraft calculator</h3>
            <p>
              Find out how likely you are to be approved before you apply, with
              no impact on your credit score.
            </p>
            <button>See if you're eligible</button>
          </div>
        </div>
        {/* 5 */}
        <div className='card-body sidebar4'>
          <div className='card-content'>
            <h3>Financial Services Compensation Scheme</h3>
            <img src='fscs.png' alt='' />
            {/* <button>More about FSCS</button> */}
          </div>
        </div>
        {/* 6 */}
        <div className='card-body sidebar5'>
          <div className='card-content'>
            <h3>Help and guidance</h3>
            <p>Contact your account manager for any help about your account</p>
            <button>Support</button>
          </div>
        </div>
        {/* footer */}
        <div className='card-body bottom'>
          <div className='card-content'>
            <p>
              Intelligent Finance is a division of Bank of Scotland plc.
              Registered in Scotland number SC327000. Registered office: The
              Mound, Edinburgh, EH1 1YZ, United Kingdom. Bank of Scotland is
              part of Lloyds Banking Group. Bank of Scotland plc is authorised
              by the Prudential Regulation Authority and regulated by the
              Financial Conduct Authority and the Prudential Regulation
              Authority.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
