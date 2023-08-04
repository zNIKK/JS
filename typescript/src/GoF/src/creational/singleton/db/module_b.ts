import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';
import { MyDatabaseModule } from './my-database-module';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Roberto', age: 30 });
myDatabaseClassic.add({ name: 'Juana', age: 50 });
myDatabaseClassic.add({ name: 'Luiza', age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
