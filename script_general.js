(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"gap":10,"id":"rootPlayer","minHeight":0,"backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"propagateClick":false,"data":{"history":{},"defaultLocale":"en","textToSpeechConfig":{"rate":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"pitch":1},"locales":{"en":"locale/en.txt"},"name":"Player652"},"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList])","watermark":false,"children":["this.MainViewer","this.Container_5DCB1D64_4943_0A85_41C0_49FA4A981958"],"scrollBarMargin":2,"scrollBarColor":"#000000","width":"100%","class":"Player","defaultMenu":["fullscreen","mute","rotation"],"hash": "43423a9de6acff68df133d492691728f3ad5a69bc0f6ba1c96abee146bf04d87", "definitions": [{"id":"Container_5DCB1D64_4943_0A85_41C0_49FA4A981958","minHeight":1,"gap":10,"backgroundOpacity":0.6,"right":"0%","data":{"name":"--- MENU"},"backgroundImageUrl":"skin/Container_5DCB1D64_4943_0A85_41C0_49FA4A981958.png","bottom":"0%","scrollBarMargin":2,"scrollBarColor":"#000000","class":"Container","children":["this.Image_5DCAAD63_4943_0A83_41B3_C4DD23735615","this.Container_5DCA8D64_4943_0A85_4173_F24E34516750"],"layout":"absolute","left":"0%","height":"12.832%","minWidth":1},{"id":"model_452FA2B2_493D_FF9C_41B9_E6116A465FEB","surfaceReticleMinRadius":15,"label":trans('model_452FA2B2_493D_FF9C_41B9_E6116A465FEB.label'),"backgroundColor":"#D4D4D4","thumbnailUrl":"media/model_452FA2B2_493D_FF9C_41B9_E6116A465FEB_t.jpg","floorRadius":5.38,"floorColor":"#FFFFFF","castShadow":true,"objects":["this.model_452FA2B2_493D_FF9C_41B9_E6116A465FEB_3","this.sprite_6997BE9B_4947_0783_4192_10BE64C7FD1F"],"environmentIntensity":0.5,"surfaceReticleMaxRadius":50,"class":"Model3D","model":"this.res_451BC2F2_493D_FF9D_41D2_3BFE581D5D43","bakedTextures":true,"floorHeight":2.08,"lights":["this.light_4512B2F3_493D_FF83_41D1_9317A01A2464","this.light_450DD2F4_493D_FF85_41D2_2A439CA24D54"],"surfaceSelectionCoef":2,"surfaceReticleRadius":0.02,"camera":"this.cam_4517F2F2_493D_FF9D_41BF_EA8A56D399D6","postprocessing":["this.fx_5D7FD8C2_4945_0BFD_41A2_8053EF71218F","this.fx_5DC0D0DA_4945_3B8C_41B5_68DCEF38F034"],"data":{"label":"Arca Kendaraan","showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true}},{"fontFamily":"Myanmar Text","id":"Button_5DCA9D64_4943_0A85_41A0_96230A06AB70","minHeight":1,"backgroundColorRatios":[0],"paddingBottom":0,"backgroundColor":["#000000"],"iconHeight":0,"verticalAlign":"middle","backgroundOpacity":0,"data":{"name":"Button house info"},"pressedBackgroundColorRatios":[0],"rollOverFontColor":"#CCFF99","paddingLeft":0,"rollOverShadow":false,"paddingRight":0,"rollOverBackgroundColorRatios":[0],"layout":"horizontal","borderColor":"#000000","pressedBackgroundColor":["#DB9B4D"],"fontSize":"15px","width":143,"label":trans('Button_5DCA9D64_4943_0A85_41A0_96230A06AB70.label'),"fontColor":"#FFFFFF","height":40,"iconWidth":0,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_692BD56E_495D_3A85_41D1_EBBB0DDE7E9E, {\"x\":1.08901,\"yaw\":8.93,\"distance\":3.1139,\"z\":2.03792,\"y\":2.93115,\"pitch\":-2.3}, 2, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","pressedFontColor":"#000000","rollOverBackgroundOpacity":0,"class":"Button","horizontalAlign":"center","paddingTop":0,"rollOverBackgroundColor":["#DB9B4D"],"pressedBackgroundOpacity":0,"minWidth":1},{"id":"window_56C0D418_4945_1A8D_41C7_827C5A204490","backgroundColor":[],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"closeButtonRollOverBorderColor":"#000000","shadow":true,"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"titlePaddingBottom":5,"closeButtonPressedBorderColor":"#000000","verticalAlign":"middle","shadowHorizontalLength":3,"headerVerticalAlign":"middle","closeButtonBorderSize":0,"modal":true,"showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"overflow":"scroll","closeButtonBackgroundColorRatios":[],"closeButtonBackgroundColor":[],"titleFontColor":"#000000","closeButtonIconWidth":12,"bodyBackgroundColorDirection":"vertical","bodyPaddingTop":5,"width":400,"closeButtonBorderRadius":11,"scrollBarColor":"#000000","titleFontFamily":"Arial","titlePaddingTop":5,"height":600,"headerBackgroundOpacity":1,"titlePaddingLeft":5,"headerBackgroundColorDirection":"vertical","veilColor":["#000000","#000000"],"bodyBorderSize":0,"closeButtonPressedBackgroundColorRatios":[0],"closeButtonRollOverIconLineWidth":2,"closeButtonPressedIconLineWidth":2,"gap":10,"veilColorRatios":[0,1],"closeButtonRollOverBackgroundColor":["#C13535"],"bodyPaddingBottom":5,"titlePaddingRight":5,"closeButtonIconHeight":12,"minHeight":0,"closeButtonPressedIconColor":"#FFFFFF","closeButtonPressedBorderSize":0,"bodyBackgroundOpacity":1,"headerBorderSize":0,"closeButtonPressedBackgroundColor":["#3A1D1F"],"minWidth":0,"closeButtonPressedBackgroundOpacity":0,"propagateClick":false,"veilOpacity":0.4,"borderRadius":5,"shadowColor":"#000000","shadowSpread":1,"closeButtonRollOverBorderSize":0,"headerBorderColor":"#000000","headerPaddingBottom":10,"shadowVerticalLength":0,"footerBackgroundColorRatios":[0,0.8980392156862745,1],"bodyBorderColor":"#000000","closeButtonIconLineWidth":2,"bodyPaddingRight":5,"closeButtonBackgroundOpacity":0,"titleHorizontalAlign":"left","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"data":{"name":"Window13908"},"closeButtonRollOverBackgroundOpacity":0,"closeButtonRollOverBackgroundColorRatios":[0],"closeButtonPaddingBottom":0,"headerPaddingTop":10,"titleFontSize":"1.29vmin","closeButtonPaddingLeft":0,"layout":"vertical","bodyBackgroundColorRatios":[0,0.5019607843137255,1],"headerPaddingRight":10,"closeButtonBorderColor":"#000000","footerBorderColor":"#000000","scrollBarMargin":2,"veilColorDirection":"horizontal","closeButtonPaddingTop":0,"footerHeight":5,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"footerBackgroundColorDirection":"vertical","headerPaddingLeft":10,"headerBackgroundColorRatios":[0,0.09803921568627451,1],"class":"Window","children":["this.htmlText_56C0E418_4945_1A8D_41A4_423EC5D5646E"],"footerBackgroundOpacity":1,"horizontalAlign":"center","footerBorderSize":0,"backgroundColorRatios":[],"closeButtonRollOverIconColor":"#FFFFFF","shadowOpacity":0.5,"closeButtonIconColor":"#000000","bodyPaddingLeft":5,"closeButtonPaddingRight":0},{"gap":10,"id":"Container_5DCA8D64_4943_0A85_4173_F24E34516750","minHeight":1,"verticalAlign":"middle","backgroundOpacity":0,"data":{"name":"-button set container"},"overflow":"scroll","paddingLeft":30,"bottom":"0%","scrollBarMargin":2,"width":1199,"height":51,"scrollBarColor":"#000000","class":"Container","children":["this.Button_5DCA9D64_4943_0A85_41A0_96230A06AB70","this.Button_51461DEC_494F_0585_41BA_3A010AD3DE58","this.Button_5ED78320_494F_FEBD_41C7_DF8E3BE0EE62","this.Button_5EE3C6E2_494F_07BC_41A8_956A8442AEA1","this.Button_5E8D6CB4_494D_0B84_4170_9CA40A050206"],"layout":"horizontal","left":"0%","minWidth":1},{"id":"Image_5DCAAD63_4943_0A83_41B3_C4DD23735615","minHeight":1,"verticalAlign":"middle","backgroundOpacity":0,"right":"0%","scaleMode":"fit_outside","url":trans('Image_5DCAAD63_4943_0A83_41B3_C4DD23735615.url'),"data":{"name":"white line"},"bottom":53,"height":2,"class":"Image","maxHeight":2,"maxWidth":3000,"horizontalAlign":"center","left":"0%","minWidth":1},{"fontFamily":"Myanmar Text","id":"Button_51461DEC_494F_0585_41BA_3A010AD3DE58","minHeight":1,"backgroundColorRatios":[0],"paddingBottom":0,"backgroundColor":["#000000"],"iconHeight":0,"verticalAlign":"middle","backgroundOpacity":0,"data":{"name":"Button house info"},"pressedBackgroundColorRatios":[0],"rollOverFontColor":"#CCFF99","paddingLeft":0,"rollOverShadow":false,"paddingRight":0,"rollOverBackgroundColorRatios":[0],"layout":"horizontal","borderColor":"#000000","pressedBackgroundColor":["#DB9B4D"],"fontSize":"15px","width":143,"label":trans('Button_51461DEC_494F_0585_41BA_3A010AD3DE58.label'),"fontColor":"#FFFFFF","height":40,"iconWidth":0,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_692BD56E_495D_3A85_41D1_EBBB0DDE7E9E, {\"x\":1.23152,\"yaw\":-16.56,\"distance\":1.02,\"z\":2.03499,\"y\":3.02783,\"pitch\":7.07}, 2, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","pressedFontColor":"#000000","rollOverBackgroundOpacity":0,"class":"Button","horizontalAlign":"center","paddingTop":0,"rollOverBackgroundColor":["#DB9B4D"],"pressedBackgroundOpacity":0,"minWidth":1},{"id":"MainViewerModel3DPlayer","viewerArea":"this.MainViewer","class":"Model3DPlayer"},{"id":"MainViewer","subtitlesBackgroundColor":"#000000","progressBarBackgroundColorDirection":"horizontal","subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowHorizontalLength":1,"progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","playbackBarHeadBorderRadius":0,"firstTransitionDuration":0,"data":{"name":"Main Viewer"},"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarBorderSize":0,"subtitlesFontColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderRadius":2,"toolTipTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBottom":5,"toolTipPaddingRight":6,"vrPointerSelectionTime":2000,"toolTipPaddingLeft":6,"width":"100%","progressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColor":["#000000"],"playbackBarHeight":10,"subtitlesTextShadowColor":"#000000","minHeight":50,"minWidth":100,"progressBottom":10,"propagateClick":false,"toolTipFontSize":"1.11vmin","progressHeight":2,"playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"subtitlesFontFamily":"Arial","progressBorderSize":0,"progressLeft":"33%","subtitlesBottom":50,"height":"100%","playbackBarBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarProgressBorderRadius":0,"playbackBarRight":0,"progressBarBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"vrPointerColor":"#FFFFFF","playbackBarLeft":0,"playbackBarHeadShadowOpacity":0.7,"vrThumbstickRotationStep":20,"toolTipFontFamily":"Arial","playbackBarHeadHeight":15,"progressBackgroundColorRatios":[0],"progressBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontSize":"3vmin","class":"ViewerArea","subtitlesTextShadowOpacity":1,"playbackBarProgressBorderColor":"#000000","playbackBarBackgroundOpacity":1,"playbackBarBorderRadius":0,"playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","toolTipFontColor":"#606060","playbackBarHeadBorderSize":0,"progressOpacity":0.7,"progressRight":"33%","subtitlesTop":0,"toolTipShadowColor":"#333138"},{"id":"mainPlayList","class":"PlayList","items":["this.Model3DPlayListItem_692BD56E_495D_3A85_41D1_EBBB0DDE7E9E"]},{"fontFamily":"Myanmar Text","id":"Button_5EE3C6E2_494F_07BC_41A8_956A8442AEA1","minHeight":1,"backgroundColorRatios":[0],"paddingBottom":0,"backgroundColor":["#000000"],"iconHeight":0,"verticalAlign":"middle","backgroundOpacity":0,"data":{"name":"Button house info"},"pressedBackgroundColorRatios":[0],"rollOverFontColor":"#CCFF99","paddingLeft":0,"rollOverShadow":false,"paddingRight":0,"rollOverBackgroundColorRatios":[0],"layout":"horizontal","borderColor":"#000000","pressedBackgroundColor":["#DB9B4D"],"fontSize":"15px","width":143,"label":trans('Button_5EE3C6E2_494F_07BC_41A8_956A8442AEA1.label'),"fontColor":"#FFFFFF","height":40,"iconWidth":0,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_692BD56E_495D_3A85_41D1_EBBB0DDE7E9E, {\"x\":1.08901,\"yaw\":-50.1,\"distance\":3.1139,\"z\":2.03792,\"y\":2.93115,\"pitch\":6.36}, 2, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","pressedFontColor":"#000000","rollOverBackgroundOpacity":0,"class":"Button","horizontalAlign":"center","paddingTop":0,"rollOverBackgroundColor":["#DB9B4D"],"pressedBackgroundOpacity":0,"minWidth":1},{"fontFamily":"Myanmar Text","id":"Button_5E8D6CB4_494D_0B84_4170_9CA40A050206","minHeight":1,"backgroundColorRatios":[0],"paddingBottom":0,"backgroundColor":["#000000"],"iconHeight":0,"verticalAlign":"middle","backgroundOpacity":0,"data":{"name":"Button house info"},"pressedBackgroundColorRatios":[0],"rollOverFontColor":"#CCFF99","paddingLeft":0,"rollOverShadow":false,"paddingRight":0,"rollOverBackgroundColorRatios":[0],"layout":"horizontal","borderColor":"#000000","pressedBackgroundColor":["#DB9B4D"],"fontSize":"15px","width":143,"label":trans('Button_5E8D6CB4_494D_0B84_4170_9CA40A050206.label'),"fontColor":"#FFFFFF","height":40,"iconWidth":0,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_692BD56E_495D_3A85_41D1_EBBB0DDE7E9E, {\"x\":0.99769,\"yaw\":28.4,\"distance\":1.26169,\"z\":2.206,\"y\":2.95192,\"pitch\":-18.58}, 2, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","pressedFontColor":"#000000","rollOverBackgroundOpacity":0,"class":"Button","horizontalAlign":"center","paddingTop":0,"rollOverBackgroundColor":["#DB9B4D"],"pressedBackgroundOpacity":0,"minWidth":1},{"fontFamily":"Myanmar Text","id":"Button_5ED78320_494F_FEBD_41C7_DF8E3BE0EE62","minHeight":1,"backgroundColorRatios":[0],"paddingBottom":0,"backgroundColor":["#000000"],"iconHeight":0,"verticalAlign":"middle","backgroundOpacity":0,"data":{"name":"Button house info"},"pressedBackgroundColorRatios":[0],"rollOverFontColor":"#CCFF99","paddingLeft":0,"rollOverShadow":false,"paddingRight":0,"rollOverBackgroundColorRatios":[0],"layout":"horizontal","borderColor":"#000000","pressedBackgroundColor":["#DB9B4D"],"fontSize":"15px","width":143,"label":trans('Button_5ED78320_494F_FEBD_41C7_DF8E3BE0EE62.label'),"fontColor":"#FFFFFF","height":40,"iconWidth":0,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_692BD56E_495D_3A85_41D1_EBBB0DDE7E9E, {\"x\":1.16278,\"yaw\":25.58,\"distance\":1.02,\"z\":1.68203,\"y\":3.26301,\"pitch\":-17.01}, 2, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","pressedFontColor":"#000000","rollOverBackgroundOpacity":0,"class":"Button","horizontalAlign":"center","paddingTop":0,"rollOverBackgroundColor":["#DB9B4D"],"pressedBackgroundOpacity":0,"minWidth":1},{"id":"model_452FA2B2_493D_FF9C_41B9_E6116A465FEB_3","class":"InnerModel3DObject","objectId":"3","data":{"label":"Object_0"}},{"id":"sprite_6997BE9B_4947_0783_4192_10BE64C7FD1F","translationZ":-0.73,"data":{"label":"Info 02"},"parentId":"3","image":"this.AnimatedImageResource_692E249D_495D_3B87_41C4_39E380BDFF4E","x":1.3456426052620538,"y":2.737277260055079,"z":1.3607646994641132,"width":40,"height":40,"class":"SpriteModel3DObject","click":"this.showWindow(this.window_56C0D418_4945_1A8D_41C7_827C5A204490, null, false)","translationLength":0,"transparentAreaActive":true,"translationX":-0.3,"translationY":0.6,"depthTest":false},{"id":"res_451BC2F2_493D_FF9D_41D2_3BFE581D5D43","class":"Model3DResource","levels":[{"url":"media/model_452FA2B2_493D_FF9C_41B9_E6116A465FEB/scene.glb","class":"Model3DResourceLevel"},{"tags":"mobile","url":"media/model_452FA2B2_493D_FF9C_41B9_E6116A465FEB/scene_mobile.glb","class":"Model3DResourceLevel"}]},{"id":"light_4512B2F3_493D_FF83_41D1_9317A01A2464","class":"OrbitLight","intensity":0.5,"castShadow":true,"shadowTolerance":2,"yaw":-45,"pitch":45},{"id":"light_450DD2F4_493D_FF85_41D2_2A439CA24D54","class":"OrbitLight","intensity":0.3,"castShadow":true,"shadowTolerance":2,"yaw":135,"pitch":75},{"id":"cam_4517F2F2_493D_FF9D_41BF_EA8A56D399D6","autoNearFar":true,"minDistance":1.02,"initialPitch":-2.3,"maxDistance":8.15,"minPitch":-90,"initialX":1.09,"maxPitch":0,"initialY":2.93,"maxX":8.67,"minY":-1.57,"class":"OrbitModel3DCamera","initialDistance":3.11,"initialYaw":8.93,"maxZ":2.95,"minX":-6.2,"maxY":7.12,"initialZ":2.04,"minZ":0.67},{"id":"fx_5D7FD8C2_4945_0BFD_41A2_8053EF71218F","class":"AmbientOcclusionModel3DPostprocessing","intensity":0},{"id":"fx_5DC0D0DA_4945_3B8C_41B5_68DCEF38F034","class":"MotionBlurModel3DPostprocessing","intensity":0.4},{"id":"htmlText_56C0E418_4945_1A8D_41A4_423EC5D5646E","minHeight":0,"scrollBarVisible":"always","paddingBottom":10,"propagateClick":false,"backgroundOpacity":0,"data":{"name":"HTMLText13909"},"paddingLeft":10,"paddingRight":10,"scrollBarHorizontalMargin":-3,"scrollBarColor":"#000000","width":"100%","html":trans('htmlText_56C0E418_4945_1A8D_41A4_423EC5D5646E.html'),"class":"HTMLText","paddingTop":10,"height":"100%","minWidth":0},{"id":"Model3DPlayListItem_692BD56E_495D_3A85_41D1_EBBB0DDE7E9E","class":"Model3DPlayListItem","player":"this.MainViewerModel3DPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","media":"this.model_452FA2B2_493D_FF9C_41B9_E6116A465FEB"},{"id":"AnimatedImageResource_692E249D_495D_3B87_41C4_39E380BDFF4E","frameCount":24,"class":"AnimatedImageResource","rowCount":6,"finalFrame":"first","frameDuration":41,"levels":[{"height":480,"class":"ImageResourceLevel","url":"media/res_680113AC_495D_1D85_41C2_B51829599B87_0.png","width":320}],"colCount":4}],"height":"100%","layout":"absolute","scripts":{"getMediaByName":TDV.Tour.Script.getMediaByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"initQuiz":TDV.Tour.Script.initQuiz,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"initAnalytics":TDV.Tour.Script.initAnalytics,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getKey":TDV.Tour.Script.getKey,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"mixObject":TDV.Tour.Script.mixObject,"historyGoBack":TDV.Tour.Script.historyGoBack,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"executeJS":TDV.Tour.Script.executeJS,"init":TDV.Tour.Script.init,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizShowScore":TDV.Tour.Script.quizShowScore,"translate":TDV.Tour.Script.translate,"createTween":TDV.Tour.Script.createTween,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setLocale":TDV.Tour.Script.setLocale,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"playAudioList":TDV.Tour.Script.playAudioList,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"quizStart":TDV.Tour.Script.quizStart,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"clone":TDV.Tour.Script.clone,"startMeasurement":TDV.Tour.Script.startMeasurement,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"showWindow":TDV.Tour.Script.showWindow,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showPopupImage":TDV.Tour.Script.showPopupImage,"registerKey":TDV.Tour.Script.registerKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"existsKey":TDV.Tour.Script.existsKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"shareSocial":TDV.Tour.Script.shareSocial,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setValue":TDV.Tour.Script.setValue,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMapLocation":TDV.Tour.Script.setMapLocation,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getOverlays":TDV.Tour.Script.getOverlays,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"resumePlayers":TDV.Tour.Script.resumePlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"openLink":TDV.Tour.Script.openLink,"isPanorama":TDV.Tour.Script.isPanorama,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPixels":TDV.Tour.Script.getPixels,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent},"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.10.js.map
})();
//Generated with v2023.2.10, Sun May 5 2024