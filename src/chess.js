//Thanks to Oscar Toledo G. (c)2010
let selectedCellNumber, i, y, u, validPreviouslySelectedCellNumber, Board = [], G = 120, x = 10, z = 15, M = 1e4, l = [5, 3, 4, 6, 2, 4, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 13, 11, 12, 14, 10, 12, 11, 13, 0, 99, 0, 306, 297, 495, 846, -1, 0, 1, 2, 2, 1, 0, -1, -1, 1, -10, 10, -11, -9, 9, 11, 10, 20, -9, -11, -10, -20, -21, -19, -12, -8, 8, 12, 19, 21];
const computerNextMove = (w, c, h, e, S, ply) => {
    let t, o, L, E, d, O = e, N = -M * M, K = 78 - h << x, moveToCellNumber, g, n, m, A, q, r, C, J, a = y ? -x : x;
    y ^= 8;
    G++;
    d = w || ply && ply >= h && computerNextMove(0, 0, 0, 21, 0, 0) > M;
    do {
        if (o = Board[moveToCellNumber = O]) {
            q = o & z ^ y;
            if (q < 7) {
                A = q-- & 2 ? 8 : 4;
                C = o - 9 & z ? [53, 47, 61, 51, 47, 47][q] : 57;
                do {
                    r = Board[moveToCellNumber += l[C]];
                    if (!w | moveToCellNumber == w) {
                        g = q | moveToCellNumber + a - S ? 0 : S;
                        if (!r & (!!q | A < 3 || !!g) || (r + 1 & z ^ y) > 9 && q | A > 2) {
                            if (m = !(r - 2 & 7))
                                return y ^= 8,
                                Board[G--] = O,
                                K;
                            J = n = o & z;
                            E = Board[moveToCellNumber - a] & z;
                            t = q | E - 7 ? n : (n += 2,
                            6 ^ y);
                            while (n <= t) {
                                L = r ? l[r & 7 | 32] - h - q : 0;
                                if (ply)
                                    L += (1 - q ? l[(moveToCellNumber - moveToCellNumber % x) / x + 37] - l[(O - O % x) / x + 37] + l[moveToCellNumber % x + 38] * (q ? 1 : 2) - l[O % x + 38] + (o & 16) / 2 : !!m * 9) + (!q ? !(Board[moveToCellNumber - 1] ^ n) + !(Board[moveToCellNumber + 1] ^ n) + l[n & 7 | 32] - 99 + !!g * 99 + (A < 2) : 0) + !(E ^ y ^ 9);
                                if (ply > h || 1 < ply & ply == h && L > z | d) {
                                    Board[moveToCellNumber] = n,
                                    Board[O] = m ? (Board[g] = Board[m],
                                    Board[m] = 0) : g ? Board[g] = 0 : 0;
                                    L -= computerNextMove(ply > h | d ? 0 : moveToCellNumber, L - N, h + 1, Board[G + 1], J = q | A > 1 ? 0 : moveToCellNumber, ply);
                                    if (!(h || ply - 1 | selectedCellNumber - O | i - n | moveToCellNumber - validPreviouslySelectedCellNumber | L < -M))
                                        return drawBoard(),
                                        G--,
                                        u = J;
                                    J = q - 1 | A < 7 || m || !ply | d | r | o < z || computerNextMove(0, 0, 0, 21, 0, 0) > M;
                                    Board[O] = o;
                                    Board[moveToCellNumber] = r;
                                    m ? (Board[m] = Board[g],
                                    Board[g] = 0) : g ? Board[g] = 9 ^ y : 0;
                                }
                                if (L > N || ply > 1 && L == N && !h && Math.random() < .5) {
                                    Board[G] = O;
                                    if (ply > 1) {
                                        if (h && c - L < 0)
                                            return y ^= 8,
                                            G--,
                                            L;
                                        if (!h)
                                            i = n,
                                            selectedCellNumber = O,
                                            validPreviouslySelectedCellNumber = moveToCellNumber;
                                    }
                                    N = L;
                                }
                                n += J || (g = moveToCellNumber,
                                m = moveToCellNumber < O ? g - 3 : g + 2,
                                Board[m] < z | Board[m + O - moveToCellNumber] || Board[moveToCellNumber += moveToCellNumber - O]) ? 1 : 0;
                            }
                        }
                    }
                } while (!r & q > 2 || (moveToCellNumber = O,
                q | A > 2 | o > z & !r && ++C * --A));
            }
        }
    } while (++O > 98 ? O = 20 : e - O);
    return y ^= 8,
    G--,
    N + M * M && N > -K + 1924 | d ? N : 0;
}

const drawBoard = () => {
    selectedCellNumber = validPreviouslySelectedCellNumber;
    for (moveToCellNumber = 21; moveToCellNumber < 99; ++moveToCellNumber)
        if (q = document.getElementById("position" + moveToCellNumber)) {
            q.innerHTML = "\xa0\u265f\u265a\u265e\u265d\u265c\u265b  \u2659\u2654\u2658\u2657\u2656\u2655".charAt(Board[moveToCellNumber] & z);
            q.style.borderColor = moveToCellNumber == selectedCellNumber ? "firebrick" : "#dde";
        }
}

window.onload = () => {
    selectedCellNumber = i = y = u = 0;
    while (selectedCellNumber++ < 120)
        Board[selectedCellNumber - 1] = selectedCellNumber % x ? selectedCellNumber / x % x < 2 | selectedCellNumber % x < 2 ? 7 : selectedCellNumber / x & 4 ? 0 : l[i++] | 16 : 7;
    for (a = "<table cellspacing=0 align=center style='border:5px solid #dde;border-radius:5px' bgcolor=#dde>",
    i = 18; i < 100; a += ++i % 10 - 9 ? "<th width=80 height=80 onclick=playerNextMove(" + i + ") id=position" + i + " style='line-height:50px;font-size:50px;border:2px solid #dde' bgcolor=#" + (i * .9 & 1 ? "c0c0f0" : "e6e6fa") + ">" : (i++,
    "<tr>"))
        ;
    a += "<th colspan=8><select id=promotionSelection style='font-size:20px'><option>&#9819;<option>";
    document.getElementById("board").innerHTML = a + "&#9820;<option>&#9821;<option>&#9822;</select></table>";

    drawBoard();
}

const playerNextMove = (cellNumber) => {
    i = (Board[cellNumber] ^ y) & z; // is black piece or white piece
    if (i > 8) { // is white piece
        validPreviouslySelectedCellNumber = cellNumber; // move to postion or change piece selection
        drawBoard();
    } else if (selectedCellNumber /* during first move this is null */ && i < 9) {
        validPreviouslySelectedCellNumber = cellNumber;
        i = Board[selectedCellNumber] & z;
        if ((i & 7) == 1 & (validPreviouslySelectedCellNumber < 29 | validPreviouslySelectedCellNumber > 90))
            i = 14 - document.getElementById("promotionSelection").selectedIndex ^ y; // capture black piece by player
        computerNextMove(0, 0, 0, 21, u, 1);
        if (y)
            setTimeout("computerNextMove(0,0,0,21,u,2/*ply*/),computerNextMove(0,0,0,21,u,1)", 250);
    }
}
