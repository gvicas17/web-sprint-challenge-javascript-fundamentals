// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attributes){
//     this.length = attributes.length;
//     this.width = attributes.width;
//     this.height = attributes.height;
//   }
  
//   CuboidMaker.prototype.volume = function(){
//     console.log(this.length*this.width*this.height);
//   }
  
//   CuboidMaker.prototype.surfaceArea = function(){
//     console.log(2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
//   }
  
//   function newcuboid(attributes){
//     CuboidMaker.call(this, attributes);
//   }
//   newcuboid.prototype = Object.create(CuboidMaker.prototype);
  
//   const cuboid = new newcuboid({
//     length: 4,
//     width: 5,
//     height: 5,
//   });


  //Class syntax

  class CuboidMakerClass{
      constructor(attributes){
          this.length = attributes.length;
          this.width = attributes.width;
          this.height = attributes.height;
      }
      volume(){
          return (this.length * this.width * this.height);
      }
      surfaceArea(){
          console.log(2*((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
      }
  }

  class newCuboidClass extends CuboidMakerClass{
      constructor (attributes){
      super(attributes);
  }
}

  const cuboidClass = new newCuboidClass({
      length: 4,
      width: 5, 
      height: 5,
  });



  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboidClass.volume()); // 100
  console.log(cuboidClass.surfaceArea()); // 130
  

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass{
    constructor(attributes){
        super(attributes);
    }
    volume(){
       return (Math.pow(this.length, 3)); 
    }
    surfaceArea(){
        return 6*(Math.pow(this.length, 2));
    }
}

const cubemaker1 = new CubeMaker({
    length: 5,
    width: 5,
    height: 5,
});

console.log(cubemaker1.volume());
console.log(cubemaker1.surfaceArea());