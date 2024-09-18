import Link from '@components/common/link';
import {Li, Ul} from '@components/common/list';

const Contribute = () => {
  return (
    <div>
      <span className="label">{'Contribute: '}</span>
      <Ul>
        <Li>
          <p className="paragraph">인원 탈주 액션 삭제 기능 구현 및 디자인 시스템 수정 사항 반영</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <Link
              favicon="https://github.com/favicon.ico"
              href="https://github.com/woowacourse-teams/2024-haeng-dong/pull/214"
              text="Pull Request #214"
            />
          </Li>
        </Ul>
      </Ul>
      <Ul style={{paddingTop: 0}}>
        <Li>
          <p className="paragraph">지출 액션 수정, 삭제 기능 구현</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <Link
              favicon="https://github.com/favicon.ico"
              href="https://github.com/woowacourse-teams/2024-haeng-dong/pull/230"
              text="Pull Request #230"
            />
          </Li>
        </Ul>
      </Ul>
      <Ul style={{paddingTop: 0}}>
        <Li>
          <p className="paragraph">차수 멤버 확인 기능, 에러 발생 시 바텀시트가 없어지지 않도록 설정</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <Link
              favicon="https://github.com/favicon.ico"
              href="https://github.com/woowacourse-teams/2024-haeng-dong/pull/311"
              text="Pull Request #311"
            />
          </Li>
        </Ul>
      </Ul>
      <Ul style={{paddingTop: 0}}>
        <Li>
          <p className="paragraph">차등 정산 기능 구현 및 테스트 작성</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <Link
              favicon="https://github.com/favicon.ico"
              href="https://github.com/woowacourse-teams/2024-haeng-dong/pull/406"
              text="Pull Request #406"
            />
          </Li>
        </Ul>
      </Ul>
      <Ul style={{paddingTop: 0}}>
        <Li>
          <p className="paragraph">정산 초대하기 카카오톡 공유 기능 추가</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <Link
              favicon="https://github.com/favicon.ico"
              href="https://github.com/woowacourse-teams/2024-haeng-dong/pull/548"
              text="Pull Request #548"
            />
          </Li>
        </Ul>
      </Ul>
      <Ul style={{paddingTop: 0}}>
        <Li>
          <p className="paragraph">참여자 별 내역에서 토스로 송금 유도하는 기능</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <Link
              favicon="https://github.com/favicon.ico"
              href="https://github.com/woowacourse-teams/2024-haeng-dong/pull/556"
              text="Pull Request #556"
            />
          </Li>
        </Ul>
      </Ul>
    </div>
  );
};

export default Contribute;
