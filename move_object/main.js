var moveFigure = document.getElementById('mooveFig');

var container = document.getElementById('wrapper');

//coordFigure = moveFigure.getBoundingClientRect();

var coordContainer = {
    pTop: container.getBoundingClientRect().top,
    pBottom: container.getBoundingClientRect().bottom,
    pLeft: container.getBoundingClientRect().left,
    pRight: container.getBoundingClientRect().right
};

var d = document.getElementById('display');


moveFigure.onmousedown = function(e) {
    moveFigure.style.position = 'absolute';
    moveAt(e);

    //document.body.appendChild(moveFigure);

    function moveAt(e) {

        moveFigure.style.left = e.pageX - coordContainer.pLeft - moveFigure.offsetWidth / 2 + 'px';
        moveFigure.style.top = e.pageY - coordContainer.pTop - moveFigure.offsetHeight / 2 + 'px';

        var fTop = moveFigure.getBoundingClientRect().top;
        var fBottom = moveFigure.getBoundingClientRect().bottom;
        var fLeft = moveFigure.getBoundingClientRect().left;
        var fRight = moveFigure.getBoundingClientRect().right;

        //d.innerHTML = coordContainer.pTop + " " + fTop;

        if (fTop <= coordContainer.pTop || fBottom >= coordContainer.pBottom || fLeft <= coordContainer.pLeft || fRight >= coordContainer.pRight) {
            moveFigure.style.background = "red";
            container.style.borderColor = 'red';
        } else {
            moveFigure.style.background = "#684eff";
            container.style.borderColor = '#ddd';
        }

        if (fBottom >= coordContainer.pBottom) {
            moveFigure.style.left = e.pageX - coordContainer.pLeft - moveFigure.offsetWidth / 2 + 'px';
            moveFigure.style.top = container.offsetHeight - (moveFigure.offsetHeight + 4) + 'px';
        }

        if (fTop <= coordContainer.pTop) {
            moveFigure.style.left = e.pageX - coordContainer.pLeft - moveFigure.offsetWidth / 2 + 'px';
            moveFigure.style.top = 0;
        }

        if (fLeft <= coordContainer.pLeft) {
            moveFigure.style.left = 0;
            moveFigure.style.top = e.pageY - coordContainer.pTop - moveFigure.offsetHeight / 2 + 'px';
        }

        if (fTop <= coordContainer.pTop && fLeft <= coordContainer.pLeft) {
            moveFigure.style.left = 0;
            moveFigure.style.top = 0;
        }

        if (fLeft <= coordContainer.pLeft && fBottom >= coordContainer.pBottom) {
            moveFigure.style.left = 0;
            moveFigure.style.top = container.offsetHeight - (moveFigure.offsetHeight + 4) + 'px';
        }

        if (fRight >= coordContainer.pRight) {
            moveFigure.style.left = container.offsetWidth - (moveFigure.offsetWidth + 4) + 'px';
            moveFigure.style.top = e.pageY - coordContainer.pTop - moveFigure.offsetHeight / 2 + 'px';
        }

        if (fTop <= coordContainer.pTop && fRight >= coordContainer.pRight) {
            moveFigure.style.left = container.offsetWidth - (moveFigure.offsetWidth + 4) + 'px';
            moveFigure.style.top = 0;
        }

        if (fRight >= coordContainer.pRight && fBottom >= coordContainer.pBottom) {
            moveFigure.style.left = container.offsetWidth - (moveFigure.offsetWidth + 4) + 'px';
            moveFigure.style.top = container.offsetHeight - (moveFigure.offsetHeight + 4) + 'px';
        }

    }

    // function moveAt(e) {

    //     var left = e.pageX - moveFigure.offsetWidth / 2;
    //     var top = e.pageY - moveFigure.offsetHeight / 2;
    //     var bottomLimit = container.offsetHeight - moveFigure.offsetHeight;
    //     var rightLimit = container.offsetWidth - moveFigure.offsetWidth;

    //     if (left < 0) {
    //         left = 0;
    //     } else if (left > rightLimit) {
    //         left = rightLimit;
    //     }

    //     if (top < 0) {
    //         top = 0;
    //     } else if (top > bottomLimit) {
    //         top = bottomLimit;
    //     }

    //     moveFigure.style.left = left + 'px';
    //     moveFigure.style.top = top + 'px';
    // }

    document.onmousemove = function(e) {
        moveAt(e);

    }

    moveFigure.onmouseup = function() {
        document.onmousemove = null;
        moveFigure.onmouseup = null;
    }

}

moveFigure.ondragstart = function() {
    return false; //Чтобы не клонировал объект переноса
};