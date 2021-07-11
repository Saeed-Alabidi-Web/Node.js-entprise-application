function asyncMiddleHandler(callback) {

    return async (req, res, next) => {
        try {
            await callback(req, res, next);
        } catch (error) {
            next(error);
        }

    };

}

function MiddleHandler(callback) {

    return (req, res, next) => {
        try { 
            callback(req, res, next);
        } catch (error) {
            next(error);
        }

    };

}

function asyncHandler(callback) {

    return async (object) => {
        try {
            await callback(object);
        } catch (error) {
            next(error);

        }

    };

}



function Handler(callback) {

    return (object) => {
        try {
            callback(object);
        } catch (error) {
            
            next(error);
        }

    };

}

module.exports = { asyncMiddleHandler, MiddleHandler, asyncHandler, Handler };



//------------------------------------------------------------------------------
// <auto-generated>
//   name :saeed mohammed alabidi
//  Email:saeed1adm@gmail.com
//  Phone:00967-733122038
// </auto-generated>
//------------------------------------------------------------------------------