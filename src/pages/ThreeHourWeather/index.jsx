import React from "react";
import "./../../styles/weather-date-info.scss";
import "./../../styles/three-hour-weather__more-info.scss";

const ThreeHourWeather = () => (
  <div className="three-hour ">
    <div className="three-hour-weather">
      <div className="three-hour-weather__more-info">
        <p className="more-info__time">this.time</p>
        <img
          className="more-info__cloud-img"
          src={`http://openweathermap.org/img/wn/${"ff" + 2}@2x.png`}
          alt="show weather"
          width="42"
          height="42"
        />
        <p className="more-info__value">
          this.temp<span>&deg</span>
        </p>
        <div className="more-info__box-value">
          <div className="more-info__box-value-img">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
            >
              <g>
                <g opacity="1">
                  <image
                    width="22"
                    height="20"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAACO0lEQVQ4T5XUSajWZRQG8N81cR5AUgIHhHDAwtDQhNyZQxCFEKG0UEE3hSg4gGKSJYgkiJq4UpwWlolrNVq4ch6voVDZol0IhoJTZTxyrnz9veq9B16+//cOz3ve5zzPadP96I2DeK2O3sdanG2Fausmbi9cx3l8g7v4AJsxG8c78JrAA3HnBZftwkS829gzF9/hGDbgXBP4KDL2dwL+Fb7AJFzqZP1tfIjV+LgJfAD/YgE+wfcFcKQ4XYOTL6HvU3zZBJ6GxTV+xft4FXswvhv1ON9Z8S5gBtZXoa5gG6Z2ETiU/BDgRZiCUXiA1zEdY4qv+TiFG9iKe+jRuOQxgjUOh1KL/AnZQ/A72vEH+mMOtmAoHuFbjEZP/NMA7nj5X6WOfU0qdmMQIrtoNKLfWd/Bio774u8aD5FsE3lFCv8kWoFzYGzxGkq6EgEbVvRdw+3nGSTzuWA7hqMPLmJF45blmFW0JLlXsBIp/DMZZ2JEiT8OSqH6YWNdkILm6Ylf8FNZObJsRlsHFYMjaiSTNJRNjZ15ZoCW1vyOyvIzvFHynIyRpZrFAZ5QzeMyDmNvJxm8VS9ZVUp5s+hKA4oM05Ru4mpR1x7g8JJswtGLYmYZ5QwWIr+x79dF2+nWwwGOdpNBV+O3Ao604srPy/b/K3CAY4yYIX22K3ECP1bhsv+jqk8sHyM9VcW6ouE9/Nwq8sYt0ewSLMM7+LPWBxQdUc+tVuB8pyjpalmIXZuOjLui1XS6ea16fd4T/wNdx3p6zVPB4AAAAABJRU5ErkJggg=="
                  />
                </g>
              </g>
            </svg>
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="20"
              viewBox="0 0 13 20"
            >
              <g>
                <g opacity="1">
                  <image
                    width="13"
                    height="20"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAYAAABWMrcvAAABhUlEQVQ4T4XTO6iIcRjH8c9xXWQyEAMnMykZlNW1XMolOsoli2RQFkXoCAPC4HBMilhcUpLIJcWoGAwMBlkMBgNC+tXz1uvNe7zb/32eb//n93t+/wH93w2M4HG3ZaCHWY8ruIeN+N3u+xc0Dq+xECfwAaf/B51EwP2YhvtYjs8N2L1pBh5gCb5U0ylMxN4+KOJf4XhrnNz6CFvwKf/bN83BKJbhV8eggxjE9i50Dc/K5q6p4/ECO/CmuWkmrmIpfvSs4QBmYXcDHa3m4TGWPQHRvDXQVFzHLnwcA0opmt8F2ox1tfkUIjamHMJ0rG3pXIOhQBfwFmcxGc8rDXNxDA9xuTXBSKCMFhPuVhKyzK+VhknY2Rl5ONClytr5VnExtlVgj1Qanlb9YqCh0rO6fkZHGlZgFc5hH87UeU+gWJm8Ha7lzsds3MG8MinafuJJPGj2tAC3sQkve2yP7m/R2M7eSiRjgWLKe0zBImwoc/Ig/wpszll0xswT+V5PIq/2Jm41E/wBlTFOBAf0Ji0AAAAASUVORK5CYII="
                  />
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 20"
            >
              <g>
                <g opacity="1" fill="white">
                  <image
                    width="24"
                    height="20"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAABs0lEQVRIS63UT2jPcRgH8NeYHBUrmR1wELU5jEa/y0pylJIoB7Uc3JRaXFZy5CJxcFBrxeaC5ciFixASZScXLX9KOw1ho2c9v5qf7/dr23ef+ly+3+d5v5/P+3k/T5vq08BlbMYUhjD6n5y/frdVBB/AeN6b2I3TuIAzLXlHMYj1+IYbOBcxZQQrMJPVn5oHdhB30IXJ/D6GIxjBw3ztCfxCdxlBN15nRZ9bqn2P61nh+ZStEx9a4j7iaxnBGmzFswIJp3EMd/EbIc+tgrjAeFfVg6L2ROUDKW0fnlTIHPmXguAatqdmRaCzWIkt2IB9eJR92JkmKPPKlSC4mMnRlKITDY/7ClfxZYE2DUdNLlaiBWLPhUWvJoLgLDbhx2KyC2Kj4YEXQ9kf4GjEh5jMnhyQOhyBFb0KWz9I6UsHrQ7RP6siVsI6hFuWeppGCNu+mQ8Sz7qfEv1cKnoOXDs6cA+HmwUvt4tixbzEc+ypWnY1HmM1viMW43idF+yNVYAdBdW8wFOcrEOwDW+xKyVp8qzKmTqE23UIAnAYx7E/1/tGPE4n9S5XD4Ik9P6EtUkU8s2dP0AOUODWiX0UAAAAAElFTkSuQmCC"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="more-info__box-value-text">
            <span>this.el.main.pressure mm</span>
            <span>this.el.main.humidity%</span>
            <span>this.el.wind.speed ms</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ThreeHourWeather;
