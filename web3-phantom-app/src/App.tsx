import { init, useConnectWallet } from "@web3-onboard/react";
import phantomModule from "@web3-onboard/phantom";
import { useState } from 'react';
import type { CSSProperties } from 'react';

const phantom = phantomModule();

const GoldFlake = ({ index }: { index: number }) => {
  const size = 2 + Math.random() * 4;
  const startPosition = Math.random() * 100;
  const duration = 5 + Math.random() * 10;
  const delay = Math.random() * -20;

  return (
    <div
      style={{
        position: 'fixed',
        width: `${size}px`,
        height: `${size}px`,
        background: 'linear-gradient(45deg, #FFD700, #FDB931)',
        borderRadius: '50%',
        left: `${startPosition}vw`,
        top: '-5vh',
        animation: `float ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        opacity: 0,
        zIndex: 0,
        boxShadow: '0 0 5px #FFD700'
      }}
    />
  );
};

init({
  wallets: [phantom],
  chains: [
    {
      id: '0x65',
      token: 'SOL',
      label: 'Solana',
      rpcUrl: 'https://api.mainnet-beta.solana.com'
    }
  ]
});

function App() {
  const [{ wallet }, connect] = useConnectWallet();
  const [isChecking, setIsChecking] = useState(false);
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null);

  const checkEligibility = async (): Promise<void> => {
    setIsChecking(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setEligibilityResult(`You Qualify! You are eligible for 500,000 $GFD!

The Airdrop will begin shortly and you have secured your position. Congratulations! Keep an eye out for when the airdrop opens and simply come back here to claim your tokens!`);
    setIsChecking(false);
  };

  const buttonStyle: CSSProperties = {
    background: 'linear-gradient(180deg, #FF69B4 0%, #FF1493 100%)',
    color: '#000000',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '14px',
    cursor: 'pointer',
    width: '220px',
    margin: '8px',
    fontFamily: '"Press Start 2P", monospace',
    fontWeight: 'bold',
    boxShadow: '0 4px 15px rgba(255, 20, 147, 0.3), 0 0 20px rgba(255, 215, 0, 0.2)',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      background: '#000000'
    }}>
      <div className="animated-border" style={{
        minHeight: '100vh',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: '"Press Start 2P", monospace',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Wallet Connection Section */}
        <div style={{
          background: '#191919',
          borderRadius: '16px',
          padding: '30px',
          maxWidth: '800px',
          width: '90%',
          boxShadow: '0 0 30px rgba(218, 165, 32, 0.1)',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          border: '1px solid rgba(128, 128, 128, 0.2)'
        }}>
          {/* Rest of your wallet connection code */}
        </div>

        {/* Information Section */}
        <div style={{
          background: '#191919',
          borderRadius: '16px',
          padding: '30px',
          maxWidth: '800px',
          width: '90%',
          marginTop: '30px',
          boxShadow: '0 0 30px rgba(218, 165, 32, 0.1)',
          textAlign: 'left',
          position: 'relative',
          zIndex: 1,
          border: '1px solid rgba(128, 128, 128, 0.2)'
        }}>
          {/* Rest of your information section code */}
        </div>

        {/* Disclaimer Section */}
        <div style={{
          maxWidth: '800px',
          width: '90%',
          marginTop: '30px',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#666666',
            fontSize: '12px',
            lineHeight: '1.6',
            padding: '20px',
            background: 'rgba(128, 128, 128, 0.1)',
            borderRadius: '8px',
            fontFamily: '"Press Start 2P", monospace'
          }}>
            Gold Fart Dust (GFD) and Unicorn Fart Dust (UFD) have no backing — no gold, no silver, no hidden treasure — just pure humor, curiosity, and a dash of meme magic. This is <strong>not investment advice</strong>. If you're considering "investing" in either GFD or UFD, keep in mind that its value aligns perfectly with its name. But hey, the world has a funny way of surprising us sometimes.
          </p>
        </div>

        {/* Gold Flakes */}
        {[...Array(50)].map((_, index) => (
          <GoldFlake key={index} index={index} />
        ))}

        <style>
          {`
            .animated-border {
              position: relative;
            }
            .animated-border::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              border-radius: 4px;
              padding: 2px;
              background: linear-gradient(
                45deg,
                #FFD700,
                #FF1493,
                #FFD700,
                #FF1493
              );
              -webkit-mask: 
                linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              background-size: 300% 300%;
              animation: borderAnimation 4s ease infinite;
            }
            @keyframes borderAnimation {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            @keyframes float {
              0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
              }
            }
            .glow-button {
              position: relative;
              overflow: hidden;
            }
            .glow-button:hover {
              transform: translateY(-1px);
              box-shadow: 0 4px 15px rgba(255, 20, 147, 0.3), 0 0 30px rgba(255, 215, 0, 0.3);
            }
            .glow-button:active {
              transform: translateY(1px);
            }
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default App;