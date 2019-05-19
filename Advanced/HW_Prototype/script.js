(function () {
    let getId = x => document.getElementById(x);
    let about = getId("about");
    function Experience(){}
    Experience.prototype.pos = function() {
        about.innerHTML += `<p><b>Position:</b> ${this.position}</p>`
    }
    Experience.prototype.inst = function(){
        about.innerHTML += `<p><b>Institution:</b> ${this.institution}</p>`
    }
    Experience.prototype.year = function(){
        about.innerHTML += `<p><b>Period:</b> ${this.period}</p>`
     }
    function Bank(a,b,c){
        this.position = a;
        this.institution = b;
        this.period = c;
    }
    Bank.prototype = Experience.prototype;
    let kreschatik = new Bank('Leading economist of currency control department','PJSC CB Kreschatik','2006 - 2007');
    let starokievskiy = new Bank('Chief economist of currency-operational department','PJSC Starokievskiy Bank','2007 – 2009');
    let starokievskiy2 = new Bank('Head of currency-operational department','PJSC Starokievskiy Bank', '2009 – 2013 (2010-2013 on maternity leave)');
    let cyprus = new Bank('Chief Specialist of currency control department', 'PJSC Bank of Cyprus', '2013 – 2014');
    let platinum = new Bank('Chief Specialist of currency control department', 'PJSC Platinum Bank', '2014-2018(2015-2018 on maternity leave)');
    let showBtn = getId("show");
    showBtn.addEventListener('click',function(){
        about.innerHTML = "";
        let year = getId("year").value;
        if(year == 2006){
            kreschatik.pos();
            kreschatik.inst();
            kreschatik.year();
        }
        else if(year >=2007 && year <= 2008){

            starokievskiy.pos();
            starokievskiy.inst();
            starokievskiy.year();
        }
        else if(year >=2009 && year <= 2012){
            starokievskiy2.pos();
            starokievskiy2.inst();
            starokievskiy2.year();
        }
        else if(year ==2013){
            cyprus.pos();
            cyprus.inst();
            cyprus.year();
        }
        else if(year >=2014 && year <= 2018){
            platinum.pos();
            platinum.inst();
            platinum.year();
        }
        if(year<2006 || year>2018){
            alert('Please, enter a year from 2006 to 2018');
        }

    })
})();
