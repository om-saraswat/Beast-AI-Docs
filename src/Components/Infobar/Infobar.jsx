import { Info } from 'lucide-react';
import './Infobar.css';

export default function Infobar() {
  return (
    <div className="info-banner">
      <Info className="icon" size={22} />
      <p>
        🎉 We now support{' '}
        <a href="#" className="highlight">Claude 3.7 Sonnet!</a>{' '}
        Enhance your AI assistants with the latest and most capable language model from Anthropic.
      </p>
    </div>
  );
}
