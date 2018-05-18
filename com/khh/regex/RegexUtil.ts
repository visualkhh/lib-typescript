export class RegexUtil {
    static is(regexp, msg) {
        return regexp.test(msg);
    }
}
