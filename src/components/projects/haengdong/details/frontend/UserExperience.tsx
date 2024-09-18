import Link from '@components/common/link';
import {Li, Ul} from '@components/common/list';

const UserExperience = () => {
  return (
    <section>
      <Ul>
        <Li>
          <p className="label">사용자 경험</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <p className="paragraph">
              <strong className="accent">유저 테스트, 피드백</strong>를 통한 서비스 개선
            </p>
          </Li>
          <Ul nestedCount={2}>
            <Li>
              <Link
                favicon="//ssl.gstatic.com/docs/spreadsheets/spreadsheets_2023q4.ico"
                href="https://docs.google.com/spreadsheets/d/1xJ4X9IHlrH0ucT-GCddeR3TOAKv8Ol5AOqJ1Kg2Rg-4/edit?gid=385585465#gid=385585465"
                text="유저 테스트 결과시트"
              />
            </Li>
            <Li>
              <Link
                favicon="https://www.notion.so/images/logo-ios.png"
                href="https://www.notion.so/pakxe/51cc3328cdb84e058a39dfda7b3904da"
                text="런칭 페스티벌 피드백"
              />
            </Li>
          </Ul>
          <Li>
            <p className="paragraph">설명이 잘 보이지 않는다는 피드백을 수용하여 사용자가 헷갈리지 않도록 개선</p>
          </Li>
          <Li>
            <p className="paragraph">
              금액을 먼저 입력하는 경향을 반영하여 지출내역 추가 시 금액을 먼저 등록할 수 있도록 플로우 개선
            </p>
          </Li>
          <Li>
            <p className="paragraph">공유 기능의 혼동을 막기 위해 카카오톡 공유 기능 도입</p>
          </Li>
          <Li>
            <p className="paragraph">토스 송금 유도 기능을 도입하여 참여자가 금액 확인 후 바로 송금할 수 있도록 유도</p>
          </Li>
          <Li>
            <p className="paragraph">영수증 첨부 기능을 추가하여 주최자가 자동으로 지출내역을 등록할 수 있도록 개선</p>
          </Li>
        </Ul>
      </Ul>
    </section>
  );
};

export default UserExperience;
