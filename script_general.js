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
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"minWidth":0,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList])","scripts":{"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMainViewer":TDV.Tour.Script.getMainViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizStart":TDV.Tour.Script.quizStart,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"historyGoForward":TDV.Tour.Script.historyGoForward,"registerKey":TDV.Tour.Script.registerKey,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"shareSocial":TDV.Tour.Script.shareSocial,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getKey":TDV.Tour.Script.getKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"isPanorama":TDV.Tour.Script.isPanorama,"quizFinish":TDV.Tour.Script.quizFinish,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"translate":TDV.Tour.Script.translate,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"createTween":TDV.Tour.Script.createTween,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getOverlays":TDV.Tour.Script.getOverlays,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"mixObject":TDV.Tour.Script.mixObject,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"textToSpeech":TDV.Tour.Script.textToSpeech,"setLocale":TDV.Tour.Script.setLocale,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"init":TDV.Tour.Script.init,"getComponentByName":TDV.Tour.Script.getComponentByName,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"clone":TDV.Tour.Script.clone,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"historyGoBack":TDV.Tour.Script.historyGoBack,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playAudioList":TDV.Tour.Script.playAudioList,"executeJS":TDV.Tour.Script.executeJS,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setValue":TDV.Tour.Script.setValue,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"initQuiz":TDV.Tour.Script.initQuiz,"downloadFile":TDV.Tour.Script.downloadFile,"openLink":TDV.Tour.Script.openLink,"startMeasurement":TDV.Tour.Script.startMeasurement,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"showPopupImage":TDV.Tour.Script.showPopupImage,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPixels":TDV.Tour.Script.getPixels,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizShowScore":TDV.Tour.Script.quizShowScore,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"existsKey":TDV.Tour.Script.existsKey,"unregisterKey":TDV.Tour.Script.unregisterKey},"scrollBarColor":"#000000","data":{"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1},"name":"Player652","defaultLocale":"en","history":{}},"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"children":["this.MainViewer","this.Container_5DCB1D64_4943_0A85_41C0_49FA4A981958"],"layout":"absolute","scrollBarMargin":2,"width":"100%","height":"100%","watermark":false,"class":"Player","gap":10,"propagateClick":false,"hash": "a96e15f4b00496faa3c708564757b0f49559869e204e691cb0ebd8deefec1a10", "definitions": [{"id":"model_452FA2B2_493D_FF9C_41B9_E6116A465FEB","label":trans('model_452FA2B2_493D_FF9C_41B9_E6116A465FEB.label'),"backgroundColor":"#D4D4D4","objects":["this.model_452FA2B2_493D_FF9C_41B9_E6116A465FEB_3","this.sprite_6997BE9B_4947_0783_4192_10BE64C7FD1F"],"thumbnailUrl":"media/model_452FA2B2_493D_FF9C_41B9_E6116A465FEB_t.jpg","surfaceReticleMinRadius":15,"surfaceSelectionCoef":2,"postprocessing":["this.fx_5D7FD8C2_4945_0BFD_41A2_8053EF71218F","this.fx_5E7AF81D_4C51_3D7D_41A0_FC5907D12D34"],"castShadow":true,"lights":["this.light_4512B2F3_493D_FF83_41D1_9317A01A2464","this.light_450DD2F4_493D_FF85_41D2_2A439CA24D54"],"environmentIntensity":0.5,"bakedTextures":true,"model":"this.res_451BC2F2_493D_FF9D_41D2_3BFE581D5D43","surfaceReticleRadius":0.02,"class":"Model3D","floorRadius":5.38,"floorColor":"#FFFFFF","surfaceReticleMaxRadius":50,"floorHeight":2.08,"data":{"showOnlyHotspotsLineSight":true,"label":"Arca Kendaraan","showOnlyHotspotsLineSightInPanoramas":true},"camera":"this.cam_4517F2F2_493D_FF9D_41BF_EA8A56D399D6"},{"id":"Button_5ED78320_494F_FEBD_41C7_DF8E3BE0EE62","backgroundColor":["#000000"],"fontSize":"15px","verticalAlign":"middle","rollOverBackgroundColorRatios":[0],"fontColor":"#FFFFFF","paddingLeft":0,"rollOverShadow":false,"backgroundColorRatios":[0],"paddingRight":0,"pressedBackgroundColor":["#DB9B4D"],"data":{"name":"Button house info"},"iconHeight":0,"borderColor":"#000000","rollOverBackgroundOpacity":0,"iconWidth":0,"width":143,"height":40,"backgroundOpacity":0,"layout":"horizontal","rollOverFontColor":"#CCFF99","label":trans('Button_5ED78320_494F_FEBD_41C7_DF8E3BE0EE62.label'),"class":"Button","fontFamily":"Myanmar Text","pressedBackgroundOpacity":0,"horizontalAlign":"center","rollOverBackgroundColor":["#DB9B4D"],"paddingTop":0,"pressedFontColor":"#000000","pressedBackgroundColorRatios":[0],"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_5EDFC9F2_4C53_DEC7_41D2_E98CEE579D70, {\"x\":1.16278,\"yaw\":25.58,\"distance\":1.02,\"z\":1.68203,\"y\":3.26301,\"pitch\":-17.01}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","minHeight":1,"paddingBottom":0,"minWidth":1},{"id":"Image_5DCAAD63_4943_0A83_41B3_C4DD23735615","minWidth":1,"scaleMode":"fit_outside","verticalAlign":"middle","url":trans('Image_5DCAAD63_4943_0A83_41B3_C4DD23735615.url'),"right":"0%","data":{"name":"white line"},"bottom":53,"height":2,"backgroundOpacity":0,"class":"Image","maxHeight":2,"maxWidth":3000,"horizontalAlign":"center","left":"0%","minHeight":1},{"id":"mainPlayList","class":"PlayList","items":["this.Model3DPlayListItem_5EDFC9F2_4C53_DEC7_41D2_E98CEE579D70"]},{"id":"MainViewerModel3DPlayer","class":"Model3DPlayer","viewerArea":"this.MainViewer"},{"id":"Container_5DCA8D64_4943_0A85_4173_F24E34516750","minWidth":1,"verticalAlign":"middle","scrollBarColor":"#000000","paddingLeft":30,"data":{"name":"-button set container"},"bottom":"0%","width":1199,"height":51,"backgroundOpacity":0,"scrollBarMargin":2,"class":"Container","gap":10,"children":["this.Button_5DCA9D64_4943_0A85_41A0_96230A06AB70","this.Button_51461DEC_494F_0585_41BA_3A010AD3DE58","this.Button_5ED78320_494F_FEBD_41C7_DF8E3BE0EE62","this.Button_5EE3C6E2_494F_07BC_41A8_956A8442AEA1","this.Button_5E8D6CB4_494D_0B84_4170_9CA40A050206"],"layout":"horizontal","left":"0%","overflow":"scroll","minHeight":1},{"id":"Container_5DCB1D64_4943_0A85_41C0_49FA4A981958","scrollBarColor":"#000000","right":"0%","data":{"name":"--- MENU"},"backgroundImageUrl":"skin/Container_5DCB1D64_4943_0A85_41C0_49FA4A981958.png","bottom":"0%","scrollBarMargin":2,"backgroundOpacity":0.6,"height":"12.832%","class":"Container","gap":10,"children":["this.Image_5DCAAD63_4943_0A83_41B3_C4DD23735615","this.Container_5DCA8D64_4943_0A85_4173_F24E34516750"],"layout":"absolute","left":"0%","minHeight":1,"minWidth":1},{"id":"window_56C0D418_4945_1A8D_41C7_827C5A204490","backgroundColor":[],"headerBorderColor":"#000000","shadow":true,"hideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"veilShowEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"veilColorRatios":[0,1],"verticalAlign":"middle","titlePaddingTop":5,"titlePaddingLeft":5,"bodyBackgroundOpacity":1,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"closeButtonBackgroundOpacity":0,"veilOpacity":0.4,"closeButtonPressedBackgroundOpacity":0,"modal":true,"headerPaddingBottom":10,"closeButtonBorderSize":0,"showEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"veilHideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"closeButtonIconLineWidth":2,"headerBorderSize":0,"closeButtonRollOverBackgroundColorRatios":[0],"closeButtonPaddingBottom":0,"closeButtonRollOverBorderSize":0,"shadowSpread":1,"titleFontColor":"#000000","closeButtonPressedIconLineWidth":2,"headerPaddingLeft":10,"width":400,"height":600,"closeButtonIconHeight":12,"data":{"name":"Window13908"},"scrollBarMargin":2,"veilColor":["#000000","#000000"],"closeButtonPressedIconColor":"#FFFFFF","gap":10,"footerBackgroundOpacity":1,"footerHeight":5,"shadowVerticalLength":0,"bodyPaddingRight":5,"closeButtonRollOverBackgroundOpacity":0,"footerBorderColor":"#000000","titlePaddingBottom":5,"closeButtonIconColor":"#000000","overflow":"scroll","minHeight":0,"closeButtonPaddingLeft":0,"footerBackgroundColorRatios":[0,0.8980392156862745,1],"headerPaddingRight":10,"minWidth":0,"closeButtonRollOverBorderColor":"#000000","shadowColor":"#000000","headerPaddingTop":10,"bodyBackgroundColorDirection":"vertical","veilColorDirection":"horizontal","titlePaddingRight":5,"headerBackgroundColorDirection":"vertical","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPaddingTop":0,"borderRadius":5,"footerBorderSize":0,"layout":"vertical","scrollBarColor":"#000000","shadowHorizontalLength":3,"bodyBorderColor":"#000000","shadowOpacity":0.5,"closeButtonRollOverIconColor":"#FFFFFF","backgroundColorRatios":[],"closeButtonBorderColor":"#000000","titleHorizontalAlign":"left","bodyPaddingLeft":5,"closeButtonBackgroundColor":[],"headerBackgroundColorRatios":[0,0.09803921568627451,1],"titleFontFamily":"Arial","bodyBorderSize":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonIconWidth":12,"closeButtonBorderRadius":11,"headerVerticalAlign":"middle","footerBackgroundColorDirection":"vertical","closeButtonBackgroundColorRatios":[],"closeButtonPaddingRight":0,"titleFontSize":"1.29vmin","closeButtonPressedBorderColor":"#000000","bodyPaddingBottom":5,"class":"Window","bodyPaddingTop":5,"propagateClick":false,"children":["this.htmlText_56C0E418_4945_1A8D_41A4_423EC5D5646E"],"horizontalAlign":"center","closeButtonPressedBackgroundColor":["#3A1D1F"],"closeButtonPressedBackgroundColorRatios":[0],"closeButtonRollOverBackgroundColor":["#C13535"],"headerBackgroundOpacity":1,"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"closeButtonPressedBorderSize":0,"closeButtonRollOverIconLineWidth":2},{"id":"Button_51461DEC_494F_0585_41BA_3A010AD3DE58","backgroundColor":["#000000"],"fontSize":"15px","verticalAlign":"middle","rollOverBackgroundColorRatios":[0],"fontColor":"#FFFFFF","paddingLeft":0,"rollOverShadow":false,"backgroundColorRatios":[0],"paddingRight":0,"pressedBackgroundColor":["#DB9B4D"],"data":{"name":"Button house info"},"iconHeight":0,"borderColor":"#000000","rollOverBackgroundOpacity":0,"iconWidth":0,"width":143,"height":40,"backgroundOpacity":0,"layout":"horizontal","rollOverFontColor":"#CCFF99","label":trans('Button_51461DEC_494F_0585_41BA_3A010AD3DE58.label'),"class":"Button","fontFamily":"Myanmar Text","pressedBackgroundOpacity":0,"horizontalAlign":"center","rollOverBackgroundColor":["#DB9B4D"],"paddingTop":0,"pressedFontColor":"#000000","pressedBackgroundColorRatios":[0],"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_5EDFC9F2_4C53_DEC7_41D2_E98CEE579D70, {\"x\":1.23152,\"yaw\":-16.56,\"distance\":1.02,\"z\":2.03499,\"y\":3.02783,\"pitch\":7.07}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","minHeight":1,"paddingBottom":0,"minWidth":1},{"id":"Button_5E8D6CB4_494D_0B84_4170_9CA40A050206","backgroundColor":["#000000"],"fontSize":"15px","verticalAlign":"middle","rollOverBackgroundColorRatios":[0],"fontColor":"#FFFFFF","paddingLeft":0,"rollOverShadow":false,"backgroundColorRatios":[0],"paddingRight":0,"pressedBackgroundColor":["#DB9B4D"],"data":{"name":"Button house info"},"iconHeight":0,"borderColor":"#000000","rollOverBackgroundOpacity":0,"iconWidth":0,"width":143,"height":40,"backgroundOpacity":0,"layout":"horizontal","rollOverFontColor":"#CCFF99","label":trans('Button_5E8D6CB4_494D_0B84_4170_9CA40A050206.label'),"class":"Button","fontFamily":"Myanmar Text","pressedBackgroundOpacity":0,"horizontalAlign":"center","rollOverBackgroundColor":["#DB9B4D"],"paddingTop":0,"pressedFontColor":"#000000","pressedBackgroundColorRatios":[0],"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_5EDFC9F2_4C53_DEC7_41D2_E98CEE579D70, {\"x\":0.99769,\"yaw\":28.4,\"distance\":1.26169,\"z\":2.206,\"y\":2.95192,\"pitch\":-18.58}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","minHeight":1,"paddingBottom":0,"minWidth":1},{"id":"MainViewer","subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","progressHeight":2,"subtitlesBackgroundOpacity":0.2,"toolTipFontSize":"1.11vmin","toolTipPaddingBottom":4,"playbackBarBorderSize":0,"progressOpacity":0.7,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","surfaceReticleColor":"#FFFFFF","progressBarBorderColor":"#000000","progressBorderSize":0,"progressBarBorderRadius":2,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderSize":0,"playbackBarHeight":10,"progressBarBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","playbackBarProgressBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"subtitlesTextShadowVerticalLength":1,"subtitlesBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","toolTipShadowColor":"#333138","playbackBarRight":0,"height":"100%","width":"100%","toolTipTextShadowColor":"#000000","firstTransitionDuration":0,"subtitlesTextShadowOpacity":1,"progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"data":{"name":"Main Viewer"},"playbackBarProgressBorderRadius":0,"progressLeft":"33%","subtitlesTop":0,"playbackBarBackgroundOpacity":1,"minHeight":50,"minWidth":100,"toolTipPaddingLeft":6,"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontColor":"#606060","toolTipBackgroundColor":"#F6F6F6","subtitlesGap":0,"progressBorderColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"playbackBarLeft":0,"toolTipPaddingTop":4,"subtitlesBottom":50,"playbackBarHeadHeight":15,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"vrPointerSelectionTime":2000,"toolTipFontFamily":"Arial","progressBackgroundColor":["#000000"],"class":"ViewerArea","propagateClick":false,"playbackBarHeadBorderRadius":0,"progressBottom":10,"progressBackgroundColorRatios":[0],"playbackBarHeadBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"toolTipPaddingRight":6,"subtitlesFontSize":"3vmin","vrThumbstickRotationStep":20},{"id":"Button_5DCA9D64_4943_0A85_41A0_96230A06AB70","backgroundColor":["#000000"],"fontSize":"15px","verticalAlign":"middle","rollOverBackgroundColorRatios":[0],"fontColor":"#FFFFFF","paddingLeft":0,"rollOverShadow":false,"backgroundColorRatios":[0],"paddingRight":0,"pressedBackgroundColor":["#DB9B4D"],"data":{"name":"Button house info"},"iconHeight":0,"borderColor":"#000000","rollOverBackgroundOpacity":0,"iconWidth":0,"width":143,"height":40,"backgroundOpacity":0,"layout":"horizontal","rollOverFontColor":"#CCFF99","label":trans('Button_5DCA9D64_4943_0A85_41A0_96230A06AB70.label'),"class":"Button","fontFamily":"Myanmar Text","pressedBackgroundOpacity":0,"horizontalAlign":"center","rollOverBackgroundColor":["#DB9B4D"],"paddingTop":0,"pressedFontColor":"#000000","pressedBackgroundColorRatios":[0],"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_5EDFC9F2_4C53_DEC7_41D2_E98CEE579D70, {\"x\":1.08901,\"yaw\":8.93,\"distance\":3.1139,\"z\":2.03792,\"y\":2.93115,\"pitch\":-2.3}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","minHeight":1,"paddingBottom":0,"minWidth":1},{"id":"Button_5EE3C6E2_494F_07BC_41A8_956A8442AEA1","backgroundColor":["#000000"],"fontSize":"15px","verticalAlign":"middle","rollOverBackgroundColorRatios":[0],"fontColor":"#FFFFFF","paddingLeft":0,"rollOverShadow":false,"backgroundColorRatios":[0],"paddingRight":0,"pressedBackgroundColor":["#DB9B4D"],"data":{"name":"Button house info"},"iconHeight":0,"borderColor":"#000000","rollOverBackgroundOpacity":0,"iconWidth":0,"width":143,"height":40,"backgroundOpacity":0,"layout":"horizontal","rollOverFontColor":"#CCFF99","label":trans('Button_5EE3C6E2_494F_07BC_41A8_956A8442AEA1.label'),"class":"Button","fontFamily":"Myanmar Text","pressedBackgroundOpacity":0,"horizontalAlign":"center","rollOverBackgroundColor":["#DB9B4D"],"paddingTop":0,"pressedFontColor":"#000000","pressedBackgroundColorRatios":[0],"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_5EDFC9F2_4C53_DEC7_41D2_E98CEE579D70, {\"x\":1.08901,\"yaw\":-50.1,\"distance\":3.1139,\"z\":2.03792,\"y\":2.93115,\"pitch\":6.36}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","minHeight":1,"paddingBottom":0,"minWidth":1},{"id":"model_452FA2B2_493D_FF9C_41B9_E6116A465FEB_3","class":"InnerModel3DObject","objectId":"3","data":{"label":"Object_0"}},{"id":"sprite_6997BE9B_4947_0783_4192_10BE64C7FD1F","data":{"label":"Info 02"},"image":"this.AnimatedImageResource_5EDA892B_4C53_DF45_41C0_F1FB9F98FF1D","transparentAreaActive":true,"depthTest":false,"x":1.3456426052620538,"parentId":"3","y":2.737277260055079,"z":1.3607646994641132,"translationLength":0,"width":40,"height":40,"class":"SpriteModel3DObject","click":"this.showWindow(this.window_56C0D418_4945_1A8D_41C7_827C5A204490, null, false)","translationX":-0.3,"translationY":0.6,"translationZ":-0.73},{"id":"fx_5D7FD8C2_4945_0BFD_41A2_8053EF71218F","class":"AmbientOcclusionModel3DPostprocessing","intensity":0},{"id":"fx_5E7AF81D_4C51_3D7D_41A0_FC5907D12D34","class":"VignetteModel3DPostprocessing"},{"id":"light_4512B2F3_493D_FF83_41D1_9317A01A2464","class":"OrbitLight","intensity":0.5,"shadowTolerance":2,"yaw":-45,"castShadow":true,"pitch":45},{"id":"light_450DD2F4_493D_FF85_41D2_2A439CA24D54","class":"OrbitLight","intensity":0.3,"shadowTolerance":2,"yaw":135,"castShadow":true,"pitch":75},{"id":"res_451BC2F2_493D_FF9D_41D2_3BFE581D5D43","class":"Model3DResource","levels":[{"url":"media/model_452FA2B2_493D_FF9C_41B9_E6116A465FEB/scene.glb","class":"Model3DResourceLevel"},{"url":"media/model_452FA2B2_493D_FF9C_41B9_E6116A465FEB/scene_mobile.glb","class":"Model3DResourceLevel","tags":"mobile"}]},{"id":"cam_4517F2F2_493D_FF9D_41BF_EA8A56D399D6","initialY":2.93,"initialYaw":8.93,"maxPitch":0,"maxDistance":8.15,"initialZ":2.04,"maxX":8.67,"maxY":7.12,"class":"OrbitModel3DCamera","minPitch":-90,"initialDistance":3.11,"minDistance":1.02,"minX":-6.2,"autoNearFar":true,"initialX":1.09,"minZ":0.67,"initialPitch":-2.3,"maxZ":2.95,"minY":-1.57},{"id":"Model3DPlayListItem_5EDFC9F2_4C53_DEC7_41D2_E98CEE579D70","class":"Model3DPlayListItem","player":"this.MainViewerModel3DPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","media":"this.model_452FA2B2_493D_FF9C_41B9_E6116A465FEB"},{"id":"htmlText_56C0E418_4945_1A8D_41A4_423EC5D5646E","scrollBarColor":"#000000","paddingLeft":10,"scrollBarVisible":"always","data":{"name":"HTMLText13909"},"paddingRight":10,"scrollBarHorizontalMargin":-3,"height":"100%","backgroundOpacity":0,"width":"100%","class":"HTMLText","html":trans('htmlText_56C0E418_4945_1A8D_41A4_423EC5D5646E.html'),"propagateClick":false,"paddingTop":10,"minHeight":0,"paddingBottom":10,"minWidth":0},{"id":"AnimatedImageResource_5EDA892B_4C53_DF45_41C0_F1FB9F98FF1D","frameCount":24,"class":"AnimatedImageResource","rowCount":6,"levels":[{"height":480,"class":"ImageResourceLevel","url":"media/res_680113AC_495D_1D85_41C2_B51829599B87_0.png","width":320}],"frameDuration":41,"finalFrame":"first","colCount":4}],"minHeight":0};
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
//Generated with v2023.2.10, Mon May 6 2024