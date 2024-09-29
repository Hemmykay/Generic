/* We use interfaces to define the interface or shape of an object

    Let's say we want to represent a calendar concept
    Remember, We have different calender implementations
    - Google
    - iCal
    - Outlook
    All this calenders should have some common properties an methods
    How we record event on google can be different. 
    Therefore, we should make the methods abstract,
    which will require we make the base class an abstract
    ----------------------------------------------------------------
    abstract class Calendar {
        constructor(public name: string){}
    
        abstract addEvent() : void;
        abstract removeEvent(): void;
    }

    Now, we can create concrete implementations like Google Calendar and so on
    This can be done better using interfaces.

    If we have any logic, algorithm or some method with few lines of code,
    Then Interface won't be suitable
    Interfaces cannot have methods implementation.
*/
interface Calendar {
    name : string;
    addEvent() : void;
    removeEvent() : void;
}

interface CloudCaledar extends Calendar {
    sync(): void;
}

class GoogleCalendar implements Calendar {
    constructor(public name: string) {}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}