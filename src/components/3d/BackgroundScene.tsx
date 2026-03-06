import Beams from './Beams';

export function BackgroundScene() {
     return (
          <Beams
               beamWidth={3}
               beamHeight={30}
               beamNumber={20}
               lightColor="#ffffff"
               speed={2}
               noiseIntensity={1.75}
               scale={0.2}
               rotation={30}
          />
     );
}
