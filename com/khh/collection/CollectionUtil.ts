export class CollectionUtil {

    public static deleteArrayItem<T>(list: T[], item: T, del?: (v: T) => void) {
        list.forEach((it, idx) => {
            if (it === item) {
                list.splice(idx, 1);
                if (del) {del(it); }
            }
        });
    }
    public static ignoreMapItem<K, V>(cointain: Map<K, V>, keys: Set<K> | K[], del?: (v: V) => void): Map<K, V> {
        const atKeys = new Set(keys);
        const r = new Map<any, any>();
        cointain.forEach((v, k, m) => {
            if (!atKeys.has(k)) {
                r.set(k, v);
                if (del) {del(v); }
            }
        });
        return r;
    }
    public static hasMapItem<K, V>(cointain: Map<K, V>, keys: Set<K> | K[], del?: (v: V) => void): Map<K, V> {
        const atKeys = new Set(keys);
        const r = new Map<any, any>();
        cointain.forEach((v, k, m) => {
            if (atKeys.has(k)) {
                r.set(k, v);
                if (del) {del(v); }
            }
        });
        return r;
    }
}
