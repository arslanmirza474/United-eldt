import { useEffect, useState } from "react";
import { Carousel } from 'antd';
import axios from 'axios'; // Don't forget to import axios
function TitleCarousel() {
    const [chapterTitles, setChapterTitles] = useState([]);

    useEffect(() => {
        const fetchChapterTitles = async () => {
            try {
                const response = await axios.get('https://server-of-united-eldt.vercel.app/api/getchapinfo');
                setChapterTitles(response.data.chapters);
            } catch (error) {
                console.error('Error fetching chapter titles:', error);
            }
        };

        fetchChapterTitles();
    }, []);

    // Helper function to chunk array into groups of three
    const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };
    function toCamelCase(str) {
        // Convert the string to lowercase and split it into words
        const words = str.toLowerCase().split(' ');

        // Capitalize the first letter of each word
        for (let i = 0; i < words.length; i++) {
            // Capitalize the first letter of the word
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }

        // Join the words back together with spaces and return
        return words.join(' ');
    }

    return (
       
        <div className="cover_of_Titles">
            <p className="courseltitle">
                This course includes</p>
            {
                chapterTitles.length === 0 ? (<>
                    <div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </>) : (<>
                    <Carousel  >
                        {chunkArray(chapterTitles, 3).map((chunk, index) => (
                            <div key={index} className="courcom">
                                {chunk.map((title, innerIndex) => (
                                    <div className="titlecarousel">
                                        <div className="coverofallcour">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <path d="M14.9723 7.87072L5.69746 2.19885C5.61938 2.15068 5.52987 2.12422 5.43816 2.1222C5.34645 2.12017 5.25585 2.14264 5.17572 2.18731C5.09559 2.23197 5.02883 2.2972 4.98232 2.37627C4.93581 2.45534 4.91123 2.54539 4.91113 2.63713V13.9809C4.91123 14.0726 4.93581 14.1627 4.98232 14.2417C5.02883 14.3208 5.09559 14.386 5.17572 14.4307C5.25585 14.4754 5.34645 14.4978 5.43816 14.4958C5.52987 14.4938 5.61938 14.4673 5.69746 14.4192L14.9723 8.74728C15.0484 8.70225 15.1115 8.63814 15.1554 8.56129C15.1992 8.48443 15.2223 8.39748 15.2223 8.309C15.2223 8.22052 15.1992 8.13357 15.1554 8.05672C15.1115 7.97986 15.0484 7.91576 14.9723 7.87072V7.87072Z" stroke="#2C292A" stroke-opacity="0.7" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div key={innerIndex}>{toCamelCase(title.title)}</div>
                                        </div>
                                        <div className="labeloftime">
                                            15 min
                                        </div>

                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </>)
            }
            <div className="coverofsponer2" style={{ marginTop: "40px" }}>
                <div className="courseltitle" >
                Qué va a aprender
                </div>
                <div className="listcom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10.75 6.5L7.08125 10L5.25 8.25" stroke="#2C292A" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#2C292A" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Curso teórico de ELDT</span>
                </div>
                <div className="listcom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10.75 6.5L7.08125 10L5.25 8.25" stroke="#2C292A" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#2C292A" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Entrenamiento para el permiso </span>
                </div>
                <div className="listcom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10.75 6.5L7.08125 10L5.25 8.25" stroke="#2C292A" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#2C292A" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>In depth Pre-trip training</span>
                </div>
                <div className="listcom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10.75 6.5L7.08125 10L5.25 8.25" stroke="#2C292A" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#2C292A" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Leyes y reglas sobre la carretera</span>
                </div>


            </div>
        </div>
       
    );
}

export default TitleCarousel;
