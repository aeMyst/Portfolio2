import React from 'react';
import '../elements/Socials.css';
import '../elements/ResumeButton.css';
import '../elements/HomeCard.css';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center bg-custom-dark text-white"
    >
      <div class="wrapper">
        <div class="display">
          <div id="time">Peter Tran</div>
          {/* Introduction */}
          <div className="text-center w-full max-w-4xl px-4">
            <p className="mt-4 text-lg">
            3rd Year Computer Science Student At The University of Calgary
            </p>
          </div>

      {/* Social Media Buttons */}
      <div className="mt-8 flex space-x-4">
      {/* Instagram */}
      <button class="button button-instagram">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="w-6 h-6 text-gray-800 dark:text-white"
          >
          <path
            clip-rule="evenodd"
            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
            fill-rule="evenodd"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      {/* LinkedIn */}
      <button class="button button-linkedin">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="w-6 h-6 text-gray-800 dark:text-white"
        >
          <path
            clip-rule="evenodd"
            d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      {/* Youtube */}
      <button class="button button-youtube">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="w-6 h-6 text-gray-800 dark:text-white"
        >
          <path
            clip-rule="evenodd"
            d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      {/* Github */}
      <button class="button button-github">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="w-6 h-6 text-gray-800 dark:text-white"
        >
          <path
            clip-rule="evenodd"
            d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      </div>
      <div className="mt-8 flex space-x-4">
        {/* Resume Button */}
        <button class="Resume-button">
          Resume
        </button>
      </div>
    </div>
  </div>
  <span></span>
  <span></span>
</section>
  );
};

export default Home;
