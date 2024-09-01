import Link from '@components/common/link';
import {Li, Ul} from '@components/common/list';

const Frontend = () => {
  return (
    <div>
      <span className="label">{'Frontend: '}</span>
      <Ul>
        <Li>
          <p className="label">design system 도입</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <p className="paragraph">행동대장에서 사용하는 디자인 컴포넌트를 라이브러리로 제작</p>
          </Li>
          <Li>
            <p className="paragraph">
              <strong className="accent">개발자 간 통일된 디자인 구현</strong>을 위해 제작했습니다.
            </p>
          </Li>
          <Li>
            <Link
              favicon="https://static-production.npmjs.com/1996fcfdf7ca81ea795f67f093d7f449.png"
              href="https://www.npmjs.com/package/haengdong-design"
              text="npm: haengdong-design"
            />
          </Li>
        </Ul>
      </Ul>
      <Ul style={{marginTop: '0.5rem'}}>
        <Li>
          <p className="label">변경에 유연하게 대응하는 방법 고민</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <p className="paragraph">
              <strong className="accent">디자인, 데이터, 기능</strong>의 분리
            </p>
          </Li>
          <Ul nestedCount={2}>
            <Li>
              <p className="paragraph">디자인은 haengdong-design 라이브러리를 통해 관리</p>
            </Li>
            <Li>
              <p className="paragraph">
                데이터는 서버, 클라이언트 상태 관리 라이브러리를 활용해서 관리 후 디자인 시스템에 주입
              </p>
            </Li>
            <Li>
              <p className="paragraph">기능은 custom hook에 데이터를 넘겨줘서 처리</p>
            </Li>
          </Ul>
          <Li>
            <p className="paragraph">
              각각의 관심사를 분리하여 코드를 작성함으로써, 변화가 일어났을 때 그 성격에 맞는 부분만 수정해주면 되는
              구조로 만들어 변화에 유연하게 대응할 수 있도록 했습니다.
            </p>
          </Li>
        </Ul>
      </Ul>
      <Ul style={{marginTop: '0.5rem'}}>
        <Li>
          <p className="label">클라이언트 상태를 쉽게 관리하기 위한 상태 관리 라이브러리 도입</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <p className="paragraph">
              기존에는 서버 상태에 의존해서 코드를 작성했기 때문에 상태 관리 라이브러리를 도입하지 않았습니다.
            </p>
          </Li>
          <Li>
            <p className="paragraph">
              지출 내역 동적 생성, 순서 변경, 금액 차등 적용 등을 고려하며,{' '}
              <strong className="accent">서버 상태 만으로는 한계가 있음을 인지</strong>하고 클라이언트 상태, 서버 상태
              두 개를 운용하기로 결정했습니다.
            </p>
          </Li>
          <Li>
            <p className="paragraph">
              비동기 서버 상태는 react-query를 사용하므로 비동기 처리를 위한 상태 라이브러리 활용은 하지 않아도 되며,
              <strong className="accent">러닝커브가 낮고 가벼운 라이브러리</strong>인 zustand를 사용하기로 결정했습니다.
            </p>
          </Li>
        </Ul>
      </Ul>
      <Ul style={{marginTop: '0.5rem'}}>
        <Li>
          <p className="label">서버 상태를 관리하기 위한 react-query 도입</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <p className="paragraph">
              클라이언트 상태를 따로 관리하기로 결정된 이후,{' '}
              <strong className="accent">서버 상태와 클라이언트 상태의 동기화를 맞춰주는 필요성</strong>에 의해
              도입했습니다.
            </p>
          </Li>
          <Li>
            <p className="paragraph">
              staleTime을 n분으로 설정해서 n분 이내에 같은 데이터를 다시 요청할 경우 캐싱된 데이터를 보여주도록 해서{' '}
              <strong className="accent">api 호출 수</strong>를 줄였습니다.
            </p>
          </Li>
          <Li>
            <p className="paragraph">
              캐시 무효화와 초기화를 이용해서 클라이언트 상태와 서버 상태의 동기화를 맞추어 사용자가{' '}
              <strong className="accent">최신의 데이터를 보장</strong>받을 수 있도록 했습니다.
            </p>
          </Li>
          <Li>
            <p className="paragraph">
              낙관적 업데이트를 활용하여 요청의 성공 여부와 관계없이{' '}
              <strong className="accent">사용자에게 변동 결과를 먼저 보여주는 UX</strong>를 챙겼습니다.
            </p>
          </Li>
        </Ul>
      </Ul>
    </div>
  );
};

export default Frontend;
