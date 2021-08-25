import _ from 'lodash';
import { IGasto } from '@interfaces/IMainInterfaces'


export const filterDebts = (list: IGasto[], field: string) => {
    const myGroup = _.groupBy(list, field);
    const listOfItens: [string, IGasto[]][] = _.toPairs(myGroup);
    return listOfItens;
}
