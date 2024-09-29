import { Party, Text } from '../types';

export default function Analysis({ texts }: { texts: Array<Text> }) {
    const getSentimentColor = (sentiment: 'negative' | 'neutral' | 'positive') => {
        switch (sentiment) {
            case 'negative':
                return 'rgb(200, 0, 0)'; // Duller Red
            case 'neutral':
                return 'rgb(200, 200, 0)'; // Duller Yellow
            case 'positive':
                return 'rgb(0, 150, 0)'; // Duller Green
            default:
                return 'rgb(200, 200, 200)'; // Duller White (fallback)
        }
    };

    const getStatusColor = (status: 'bad' | 'blunder' | 'neutral' | 'good' | 'excellent') => {
        switch (status) {
            case 'bad':
                return 'rgb(200, 0, 0)'; // Duller Red
            case 'blunder':
                return 'rgb(200, 0, 0) glow'; // Duller Red with glow
            case 'good':
                return 'rgb(0, 150, 0)'; // Duller Green
            case 'excellent':
                return 'rgb(0, 200, 0) glow'; // Duller Green with glow
            default:
                return 'rgb(200, 200, 200)'; // Duller White (fallback)
        }
    };

    if (!Array.isArray(texts)) {
        return <div className="text-red-500">Error: texts is not an array</div>;
    }

    return (
        <div className="flex flex-col bg-neutral-800 py-16 px-2 text-white">
            <style jsx>{`
                .glow {
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
                }
                .tooltip {
                    position: relative;
                    display: inline-block;
                }
                .tooltip .tooltiptext {
                    visibility: hidden;
                    width: 120px;
                    background-color: black;
                    color: #fff;
                    text-align: center;
                    border-radius: 6px;
                    padding: 5px;
                    position: absolute;
                    z-index: 1;
                    bottom: 125%; /* Position the tooltip above the text */
                    left: 50%;
                    margin-left: -60px;
                    opacity: 0;
                    transition: opacity 0.3s;
                }
                .tooltip:hover .tooltiptext {
                    visibility: visible;
                    opacity: 1;
                }
            `}</style>
            <h1 className="text-3xl font-bold text-white mb-4">Analysis</h1>
            <div className="space-y-4">
                {texts.map((text, index) => (
                    <div key={index} className={`flex flex-col space-y-2 ${text.party === Party.USER ? 'items-end' : 'items-start'}`}>
                        <div className={`${text.party === Party.USER ? `bg-pink-700` : `bg-gray-700`} p-4 rounded-lg shadow-md hover:bg-gray-600 hover:shadow-lg transition duration-300 ${text.party === Party.USER ? 'bg-blue-500' : 'bg-gray-700'}`}>
                            <p className="text-lg">{text.content}</p>
                        </div>
                        <div className="flex space-x-2">
                            <div
                                className={`rounded px-2 py-1 text-sm font-semibold tooltip ${getSentimentColor(text.analysis.sentiment).includes('glow') ? 'glow' : ''}`}
                                style={{ backgroundColor: getSentimentColor(text.analysis.sentiment).replace(' glow', '') }}
                            >
                                {text.party === Party.USER ? 'Sentiment elicited:' : 'Sentiment'} {text.analysis.sentiment}
                                <span className="tooltiptext">{text.analysis.commentary}</span>
                            </div>
                            {text.party === Party.USER && (
                                <>
                                    <div className="rounded bg-gray-700 px-2 py-1 text-sm font-semibold tooltip">
                                        Rizzscore: {text.analysis.rizzscore}
                                        <span className="tooltiptext">{text.analysis.commentary}</span>
                                    </div>
                                    <div
                                        className={`rounded px-2 py-1 text-sm font-semibold tooltip ${getStatusColor(text.analysis.status).includes('glow') ? 'glow' : ''}`}
                                        style={{ backgroundColor: getStatusColor(text.analysis.status).replace(' glow', '') }}
                                    >
                                        {text.analysis.status} move
                                        <span className="tooltiptext">{text.analysis.commentary}</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}