///<reference path="someInterface.ts"/>
///<reference path="someObject.ts"/>

namespace Some.Thing {
    export class Whatever {
        public static getSomeInterface():ISomeInterface{
            let obj: ISomeInterface = { prop: 5};
            return obj;
        }

        public static getSomeObject():SomeObject{
             return new SomeObject();
        }
    }
}