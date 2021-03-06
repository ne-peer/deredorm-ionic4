import { camelcase } from 'camelcase';

export class Serializable {

    /**
     * @see https://github.com/sindresorhus/camelcase
     */
    protected camelizer;

    constructor() {
        this.camelizer = camelcase;
    };

    /**
     * classにjsonデータを注入します
     *
     * @param json
     * @param boolean
     * @param ignoreProp
     */
    public fillFromJSON(jsonObj, isCamelizeProp?: boolean, ignoreProp: Array<string> = []) {
        for (let propName in jsonObj) {
            if (ignoreProp.length > 0 && ignoreProp.some(v => v === propName)) {
                // 指定された属性を無視
                continue;
            }

            /* tslint:disable */
            const rawPropName = propName;

            // キーをキャメルケースに変換
            if (isCamelizeProp === true) {
                propName = this.camelizer(propName);
            }

            // プロパティの存在確認
            if (this.hasOwnProperty(propName) === false) {
                continue;
            }

            this[propName] = jsonObj[rawPropName];
        }
    }

}
