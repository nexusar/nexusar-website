import { useEffect } from 'react';
import SineWaves from 'sine-waves';
import classes from './SineWave.module.css';

const SineWave = () => {
  useEffect(() => {
    new SineWaves({
      el: document.getElementById('waves'),
      speed: 20,
      ease: 'SineInOut',
      wavesWidth: '100%',
      waves: [
        {
          timeModifier: 1,
          lineWidth: 1,
          amplitude: -15.0,
          wavelength: 30.0,
        },
        {
          timeModifier: 0.5,
          lineWidth: 1,
          amplitude: -20.0,
          wavelength: 40.0,
        },
        {
          timeModifier: 0.25,
          lineWidth: 2,
          amplitude: -25.0,
          wavelength: 50.0,
        },
      ],

      // Called on window resize
      resizeEvent: function () {
        let gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0, '#3c3c3d');
        gradient.addColorStop(0.5, '#f5f5f7');
        gradient.addColorStop(1, '#3c3c3d');

        let index = -1;
        let length = this.waves.length;
        while (++index < length) {
          this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
      },
    });
  }, []);

  return <canvas id="waves" className={classes.canvas}></canvas>;
};
export default SineWave;
