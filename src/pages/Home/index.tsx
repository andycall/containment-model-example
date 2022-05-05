import { createElement, useEffect, useState } from 'rax';

const BIG_TEXT = `This is a big text This is a big text This is a big text This is a big text This is a big text This is a big text`;

export default function Home() {

  let data: any[] = [];
  for (let i = 0; i < 10000; i++) {
    data.push('TEXT TEXT TEXT TEXT');
  }

  const [shouldInsertContentToNormal, updateNormalDivContent] = useState(false);
  const [shouldInsertContentToContainment, updateContainmentDiv] = useState(false);
  const [isContentVisibilityEnabled, setContentVisibility] = useState(false);

  return (
    <div id="container">
      <button onClick={() => {
       updateNormalDivContent(true);
      }}>Add Big Data To Normal Div</button>
      <button onClick={() => {
       updateContainmentDiv(true);
      }}>Add Big Data Containment Div</button>
      <button onClick={() => {
       setContentVisibility(!isContentVisibilityEnabled);
      }}> {isContentVisibilityEnabled ? 'Disable' : 'Enable'} Content Visibility</button>
      <div>
        <div style={{
          width: '200px',
          height: '100px'
        }}>
          {
              shouldInsertContentToNormal ? <div>
                <div>{BIG_TEXT}</div>
                </div> : ''
          }
        </div>

        <div style={{
          contain: 'content',
          width: '200px',
          height: '100px'
        }}>
          {
              shouldInsertContentToContainment ? <div>
                <div>{BIG_TEXT}</div>
                </div> : ''
          }
        </div>
        {
          data.map((d, i) => {
            return <div style={{
              contentVisibility: isContentVisibilityEnabled ? 'auto' : 'visible'
            }} key={'_' +i}>{d}
              <img height={400 + Math.random() * 50} src="https://andycall.oss-accelerate.aliyuncs.com/static/66084423.jpg" />
            </div>
          })
        }
      </div>
    </div>
  );
}
