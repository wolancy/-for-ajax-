

                var currentIndex = 0;
                function showCode(){
                    if(currentIndex>=param_series.length){
                        return;
                    }
                    var _series = param_series[currentIndex].series;
                    var tr_index = currentIndex;
                    var incurrentIndex = 0;
                    function getCode(){
                        if(incurrentIndex>=param_store.length){
                            return;
                        }
                        var _store = param_store[incurrentIndex].store_name;
                        var param = {};
                        param["corp_id"] = sessionStorage.getItem("companyCode");
                        param["store_name"] = _store;
                        param["series"] = _series;
                        console.log(JSON.stringify(param));
                        oc.postRequire("POST","/preassign/seriesPreassigned",param,function(data){
                            console.log("款数配发数"+data.param);
                            console.log(tr_index);
                            console.log(incurrentIndex);
                            var str = JSON.parse(data.param);
                            var param_code = str.param;
                            //var con = "";
                            //con =``
                            var preassigned_num = param_code[0].preassigned_num || "";
                            var product_num = param_code[0].product_num || "";
                            $("#tbody01").find("tr").eq(tr_index).find("td").eq((incurrentIndex+1)*2-2+1).html(product_num);
                            $("#tbody01").find("tr").eq(tr_index).find("td").eq((incurrentIndex+1)*2-1+1).html(preassigned_num);
                            incurrentIndex++;
                            getCode();
                        });
                        currentIndex++;
                        showCode();
                    }
                    getCode();
                };
                showCode();
