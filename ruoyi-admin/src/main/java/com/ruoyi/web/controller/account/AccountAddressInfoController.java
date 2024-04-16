package com.ruoyi.web.controller.account;

import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.domain.entity.AccountAddressInfo;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.enums.BusinessType;

import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.service.IAccountAddressInfoService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 出账账户Controller
 * 
 * @author dorion
 * @date 2024-04-13
 */
@Controller
@RequestMapping("/account/transfer")
public class AccountAddressInfoController extends BaseController
{
    private String prefix = "account/transfer";

    @Autowired
    private IAccountAddressInfoService accountAddressInfoService;

    @RequiresPermissions("account:transfer:view")
    @GetMapping()
    public String transfer()
    {
        return prefix + "/transfer";
    }

    /**
     * 查询出账账户列表
     */
    @RequiresPermissions("account:transfer:list")
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(AccountAddressInfo accountAddressInfo) throws Exception {
        startPage();
        List<AccountAddressInfo> list = accountAddressInfoService.selectAccountAddressInfoListByResouce(accountAddressInfo);

        return getDataTable(list);
    }

    /**
     * 导出出账账户列表
     */
    @RequiresPermissions("account:transfer:export")
    @Log(title = "出账账户", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(AccountAddressInfo accountAddressInfo) throws Exception {
        List<AccountAddressInfo> list = accountAddressInfoService.selectAccountAddressInfoListByResouce(accountAddressInfo);
        ExcelUtil<AccountAddressInfo> util = new ExcelUtil<AccountAddressInfo>(AccountAddressInfo.class);
        return util.exportExcel(list, "出账账户数据");
    }

    /**
     * 新增出账账户
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存出账账户
     */
    @RequiresPermissions("account:transfer:add")
    @Log(title = "出账账户", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(AccountAddressInfo accountAddressInfo) throws Exception {
        return toAjax(accountAddressInfoService.insertAccountAddressInfo(accountAddressInfo));
    }

    /**
     * 修改出账账户
     */
    @RequiresPermissions("account:transfer:edit")
    @GetMapping("/edit/{idAccoutAddressInfo}")
    public String edit(@PathVariable("idAccoutAddressInfo") Long idAccoutAddressInfo, ModelMap mmap)
    {
        AccountAddressInfo accountAddressInfo = accountAddressInfoService.selectAccountAddressInfoByIdAccoutAddressInfo(idAccoutAddressInfo);
        mmap.put("accountAddressInfo", accountAddressInfo);
        return prefix + "/edit";
    }

    /**
     * 修改保存出账账户
     */
    @RequiresPermissions("account:transfer:edit")
    @Log(title = "出账账户", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(AccountAddressInfo accountAddressInfo) throws Exception {
        return toAjax(accountAddressInfoService.updateAccountAddressInfo(accountAddressInfo));
    }

    /**
     * 删除出账账户
     */
    @RequiresPermissions("account:transfer:remove")
    @Log(title = "出账账户", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(accountAddressInfoService.deleteAccountAddressInfoByIdAccoutAddressInfos(ids));
    }
}
