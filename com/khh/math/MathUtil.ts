import {StringUtil} from '../string/StringUtil';
import {ValidUtil} from '../valid/ValidUtil';

export class MathUtil {
    //end - start    끝과 시작의 사이길이를 취득한다.
    static betweenLength(start, end) {
        return end - start;
    }

    //전체값에서 일부값은 몇 퍼센트? 계산법 공식    tot에서  data는 몇%인가.
    static percentByTot(tot, data) {
        /*
        전체값에서 일부값은 몇 퍼센트? 계산법 공식
        일부값 ÷ 전체값 X 100
        예제) 300에서 105는 몇퍼센트?
        답: 35%
        */
        return (data / tot) * 100;
    }
    //전체값의 몇 퍼센트는 얼마? 계산법 공식    tot에서  wantPercent는 몇인가?
    static percent(tot, wantPercent) {
        /*
        전체값 X 퍼센트 ÷ 100
        예제) 300의 35퍼센트는 얼마?
        답) 105
         */
        return (tot * wantPercent) / 100;
    }
    //숫자를 몇 퍼센트 증가시키는 공식    tot에서  wantPercent을 증가 시킨다
    static percentUp(tot, wantPercent) {
        /*
        숫자를 몇 퍼센트 증가시키는 공식
        숫자 X (1 + 퍼센트 ÷ 100)
        예제) 1548을 66퍼센트 증가하면?
        답) 2569.68
         */
        return tot * (1 + wantPercent / 100);
    }
    //숫자를 몇 퍼센트 감소하는 공식    tot에서  wantPercent을 증감 시킨다
    static percentDown(tot, wantPercent) {
        /*
        숫자를 몇 퍼센트 감소하는 공식
        숫자 X (1 - 퍼센트 ÷ 100)
        예제) 1548을 66퍼센트 감소하면?
        답) 526.32
         */
        return tot * (1 - wantPercent / 100);
    }
}
